<script>
    import I18n from "../locale/I18n";
    import {onMount} from 'svelte';
    import {conf, links} from "../stores/conf";
    import Button from "../components/Button.svelte";
    import {fetchServiceName} from "../api";
    import Spinner from "../components/Spinner.svelte";
    import {proceed} from "../utils/sso";

    export let id;
    let serviceName = null;
    let showSpinner = true;

    onMount(() => {
        $links.displayBackArrow = false;

        fetchServiceName(id).then(res => {
            serviceName = res.name;
            showSpinner = false;
        });
    });

    const retry = () => {
        window.location.href = `/myconext/api/idp/oidc/account/${id}?forceAuth=true`;
    };

</script>

<style>


    h2 {
        margin: 30px 0 40px 0;
        font-size: 32px;
        color: var(--color-primary-green);
    }

    p.info {
        margin-bottom: 25px;
    }

    div.last {
        margin-top: 25px;
    }

</style>
{#if showSpinner}
    <Spinner/>
{/if}

<h2>{I18n.t("AffiliationMissing.Header.COPY")}</h2>
<p class="info">{I18n.t("AffiliationMissing.Info.COPY")}</p>
<p class="info">{I18n.t("AffiliationMissing.Proceed.COPY", {name: serviceName})}</p>

<Button href="/proceed" onClick={() => proceed($conf.magicLinkUrl)}
        className="cancel"
        label={I18n.t("Profile.Proceed.COPY")}/>
<div class="last">
    <Button href="/retry" onClick={retry}
            label={I18n.t("EppnAlreadyLinked.RetryButton.COPY")}/>
</div>
