<script>
    import I18n from "../locale/I18n";
    import Button from "../components/Button.svelte";
    import {navigate} from "svelte-routing";

    let busy = false;

    const retry = () => {
        busy = true;
        navigate("/personal?retry=true")
    };

</script>

<style lang="scss">
    .subject-already-linked {
        display: flex;
        flex-direction: column;
        padding: 25px;

        h1 {
            color: var(--color-primary-red);
            font-size: 32px;
            font-weight: 600;
            margin: 22px 0;
        }

        p {
            margin-bottom: 12px;

            &.last {
                margin-bottom: 40px;
            }
        }

    }


</style>
<div class="subject-already-linked ">
    <h1>{I18n.t("subjectAlreadyLinked.header")}</h1>
    <p class="last">{I18n.t("subjectAlreadyLinked.info")}</p>
    <Button href={`/link`}
            didisabled={busy}
            large={true}
            label={I18n.t("EppnAlreadyLinked.RetryButton.COPY")}
            onClick={retry}/>
</div>