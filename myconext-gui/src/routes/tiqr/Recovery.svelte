<script>
    import I18n from "../../locale/I18n";
    import phoneIcon from "../../icons/redesign/mobile-phone.svg?raw";
    import backupIcon from "../../icons/redesign/backup-code.svg?raw";
    import LoginOption from "../../components/LoginOption.svelte";
    import {navigate} from "svelte-routing";

    export let change = false;

    const phoneNumber = () => {
        navigate(`/${change ? "change-" : ""}phone-verification`);
    }

    const backUpCode = () => {
        navigate(`/${change ? "change-" : ""}recovery-code`);
    }

</script>

<style lang="scss">
    .recovery {
        width: 100%;
        height: 100%;
    }

    .inner-container {
        height: 100%;
        margin: 0 auto;
        padding: 15px 30px 15px 0;
        display: flex;
        flex-direction: column;
    }

    h2 {
        margin: 20px 0 10px 0;
        color: var(--color-primary-green);
    }

    p.explanation {
        margin: 15px 0;
    }

    p.methods {
        margin-bottom: 15px;
    }
</style>
<div class="recovery">
    <div class="inner-container">

        <h2 class="header">{I18n.t(`recovery.${change ? "changeHeader" : "header"}`)}</h2>
        <p class="explanation">{I18n.t(`recovery.${change ? "changeInfo" : "info"}`)}</p>
        <p class="methods">{I18n.t("Recovery.Methods.COPY")}</p>
        <div class="phone-number">
            <LoginOption icon={phoneIcon}
                         label={I18n.t("Recovery.PhoneNumber.COPY")}
                         subLabel={I18n.t("Recovery.PhoneNumberInfo.COPY")}
                         action={phoneNumber}
                         index={1}
                         preferred={true}/>
        </div>
        <div class="other-account">
            <LoginOption icon={backupIcon}
                         label={I18n.t("Recovery.BackupCode.COPY")}
                         subLabel={I18n.t("Recovery.BackupCodeInfo.COPY")}
                         action={backUpCode}
                         index={2}/>
        </div>
    </div>
</div>