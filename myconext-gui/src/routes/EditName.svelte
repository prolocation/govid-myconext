<script>
    import {flash, user} from "../stores/user";
    import I18n from "../locale/I18n";
    import {me, updateUser} from "../api";
    import {navigate} from "svelte-routing";
    import Button from "../components/Button.svelte";

    const update = () => {
        if ($user.familyName && $user.givenName) {
            updateUser($user).then(() => {
                navigate("/personal");
                flash.setValue(I18n.t("Edit.Updated.COPY"));
            });
        }
    };

    const cancel = () => {
        me().then(json => {
            for (var key in json) {
                if (json.hasOwnProperty(key)) {
                    $user[key] = json[key];
                }
            }
            navigate("/personal");
        });
    }

</script>

<style>
    .profile {
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    h2 {
        margin-top: 35px;
        color: var(--color-primary-green);
    }
    p.info {
        margin: 12px 0 32px 0;
    }

    label {
        font-weight: 600;
        margin: 33px 0 13px 0;
        display: inline-block;
    }

    input {
        border-radius: 8px;
        border: solid 1px #676767;
        padding: 14px;
        font-size: 16px;
    }

    .options {
        margin-top: 60px;
        display: flex;
    }

</style>
<div class="profile">
    <h2>{I18n.t("Profile.Name.COPY")}</h2>
    <p class="info">{I18n.t("Edit.Info.COPY")}</p>
    <label for="givenName">{I18n.t("Edit.GivenName.COPY")}</label>
    <input id="givenName" type="text" spellcheck="false" bind:value={$user.givenName}/>
    <label for="familyName">{I18n.t("Edit.FamilyName.COPY")}</label>
    <input id="familyName" type="text" spellcheck="false" bind:value={$user.familyName}/>

    <div class="options">
        <Button className="cancel" label={I18n.t("YourVerifiedInformation.ConfirmRemoval.Button.Cancel.COPY")} onClick={cancel}/>
        <Button label={I18n.t("Edit.Update.COPY")} onClick={update}
                disabled={!($user.familyName && $user.givenName)}/>
    </div>
</div>
