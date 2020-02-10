import I18n from "i18n-js";

I18n.translations.en = {
    header: {
        title: "My SURFconext",
        logout: "Logout"
    },
    landing: {
        info: "Collaborate online in higher education",
        login: "Enter",
        logoutStatus: "You have successfully logged out. To complete the logout process, you must close your browser",
        deletionStatus: "You have successfully deleted your account. To complete the process, you must close your browser"
    },
    notFound: {
        main: "404 - Not Found"
    },
    profile: {
        title: "Personal information",
        info: "Basic information like your name and email address, and the information we have received from your institution",
        email: "Email address",
        schacHomeOrganization: "Institution ID",
        name: "Name",
        profile: "Profile"
    },
    edit :{
        title: "Name",
        info: "Please provide your full name",
        givenName: "Your given name",
        familyName: "Your family name",
        update: "Update",
        cancel: "Cancel",
        updated: "Your profile has been updated",
        back: "/profile"
    },
    security: {
        title: "Security",
        subTitle: "We support the following sign in options for My SURFconext:",
        usePassword: "Password",
        notSet: "Not set",
        useMagicLink: "Send magic link to",
        rememberMe: "Remember this device",
        rememberMetrue: "Yes",
        rememberMefalse: "No",
    },
    home: {
        welcome: "Welcome {{name}}",
        profile: "Personal info",
        security: "Security",
        account: "Account",
        favorites: "Favorites",
        settings: "Settings",
        links: {
            teams: "Teams",
            teamsHref: "https://teams.{{baseDomain}}",
        }
    },
    account :{
        title: "Your my.SURFconext account",
        info: "You can choose to remove your SURFconext account",
        deleteAccount : "Delete my account",
        deleteAccountConfirmation : "Are you sure you want to delete your my.SURFconext account?"
    },
    password: {
        setTitle: "Set password",
        updateTitle: "Change password",
        currentPassword: "Current password",
        newPassword: "New password",
        confirmPassword: "Confirm new password",
        setUpdate: "Set password",
        updateUpdate: "Update password",
        cancel: "Cancel",
        set: "Your password has been set",
        updated: "Your password has been updated",
        back: "/security",
        passwordDisclaimer: "Make sure it's at least 15 characters OR at least 8 characters including a number and a uppercase letter.",
        invalidCurrentPassword: "Your current password is invalid."
    },
    rememberMe: {
        updated: "Your device is no longer remembered",
        forgetMeTitle: "Remember this device.",
        info: "Your device is currently remembered. You will be automatically logged in on the SURFconext Guest IdP.",
        cancel: "Cancel",
        update: "Forget me",
        forgetMeConfirmation: "Are you sure you no longer want this device remembered?",
        forgetMe: "Forget this device"
    },
    footer: {
        tip: "Need tip or info?",
        help: "Help & FAQ",
        poweredBy: "Proudly powered by",
        surfconext: "SURFconext",
    },
    modal: {
        cancel: "Cancel",
        confirm: "Confirm"
    },
    migration: {
        header: "Your SURFconext guest account has been created!",
        info: "Your Onegini account is succesfully migrated.",
        info2: "From now on you must use your SURFconext guest account to logon to services where you previously used Onegini.",
        info3: "Tip! Your eduID account by default doesn’t need a password (we send a magic link to your email to sign in), but if you want to, you can set one right now under the",
        securityLink: " Security tab.",
        link: "Show my account details"
    },
    migrationError: {
        header: "Account Migration Conflict",
        info: "We have NOT migrated your existing Onegini account to a SURFconext Guest Account as you already have a Guest Account user with the email {{email}}.",
        question: "If you want to migrate your Onegini account then click migrate. If you want proceed with your existing SURFconext Guest Account then click proceed.",
        migrate: "Migrate",
        proceed: "Proceed",
        help : "If you have any questions about this please contact <a href=\"mailto:support@surfconext.nl\" >support@surfconext.nl</a>."
    }
};

I18n.ts = (key, model) => {
    let res = I18n.t(key, model);
    if (I18n.branding && I18n.branding !== "SURFconext") {
        res = res.replace(/SURFconext/g, I18n.branding);
    }
    return res;
};