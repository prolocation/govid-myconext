<script>
    import {user} from "../stores/user";
    import {navigate} from "svelte-routing";
    import {get} from "@github/webauthn-json";
    import I18n from "../locale/I18n";
    import {fetchServiceName, webAuthnStartAuthentication, webAuthnTryAuthentication} from "../api/index";
    import Spinner from "../components/Spinner.svelte";
    import {onMount} from "svelte";
    import Cookies from "js-cookie";
    import Button from "../components/Button.svelte";
    import {cookieNames} from "../constants/cookieNames";
    import {loginPreferences} from "../constants/loginPreferences";
    import {links} from "../stores/conf";
    import {mrcc} from "../utils/constants";

    export let id;
    let showSpinner = true;
    let serviceName = "";
    let isMrcc = null;

    onMount(() => {
        const urlParams = new URLSearchParams(window.location.search);
        isMrcc = urlParams.has(mrcc);
        if (isMrcc) {
            webAuthnStart();
        } else {
            $links.displayBackArrow = true;
            fetchServiceName(id).then(res => {
                serviceName = res.name;
                showSpinner = false;
            });
        }
    });

    const webAuthnStart = (test = false) => {
        webAuthnStartAuthentication($user.email, id, test)
            .then(request => {
                showSpinner = false;
                isMrcc = false;
                get({publicKey: request.publicKeyCredentialRequestOptions})
                    .then(credentials => {
                        //rawId is not supported server-side
                        delete credentials["rawId"];
                        webAuthnTryAuthentication(JSON.stringify(credentials), id, $user.rememberMe)
                            .then(json => {
                                Cookies.set(cookieNames.LOGIN_PREFERENCE, loginPreferences.FIDO, {
                                    expires: 365,
                                    secure: true,
                                    sameSite: "Lax"
                                });
                                if (json.stepup) {
                                    navigate(`/stepup/${id}?name=${encodeURIComponent(serviceName)}&explanation=${json.explanation}`, {replace: true})
                                } else {
                                    window.location.href = json.url
                                }
                            })

                    })
            })
    }


</script>

<style lang="scss">


</style>

{#if showSpinner}
    <Spinner/>
{/if}
{#if !isMrcc}
    <h2 class="header">{I18n.t("Login.UseWebAuth.COPY")}</h2>
    {#if serviceName}
        <h2 class="top">{I18n.t("Login.HeaderSubTitle.COPY")}<span>{serviceName}</span></h2>
    {/if}
    <p class="explanation">{I18n.t("WebAuthn.Explanation.COPY")}</p>
    <Button href="/start"
            disabled={showSpinner}
            label={I18n.t("WebAuthn.Next.COPY")}
            className="full"
            onClick={webAuthnStart}/>

{/if}
