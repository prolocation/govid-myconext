import I18n from "i18n-js";

I18n.translations.en = {
    sidebar: {
        home: "Home",
        personalInfo: "Personal info",
        dataActivity: "Data & activity",
        security: "Security",
        account: "Account"
    },
    start: {
        hi: "Hi {{name}}!",
        manage: "Manage your personal info, your privacy, and the security of your eduID account.",
        app: {
            title: "Are you studying in NL? Connect your institution!",
            infoBold: "When you study in the Netherlands ",
            infoPart: "and you want to use eduID to login to educational services, we need to be sure it's you and not someone impersonating you.",
            requirements: "You must therefore add the following information to your eduID",
            validatedName: "Validation of your full name by a third party",
            proofStudent: "Proof of being a student",
            institution: "Your current institution",
            connect: "Connect your school institution"
        }
    },
    header: {
        title: "eduID",
        logout: "Logout"
    },
    landing: {
        logoutTitle: "You have been logged out",
        logoutStatus: "To finalise the logout process you must now close this browser.",
        loginAgain: "Login again",
        deleteTitle: "Your eduID account has been deleted",
        deleteStatus: "To finalise the removal process you must now close this browser.",
        registerAgain: "Register again"
    },
    notFound: {
        title: "Whoops...",
        title2: "Something went wrong (404)."
    },
    profile: {
        title: "Your personal info",
        info: "When you use eduID to logon to other websites, the following information can be shared.",
        verifiedInformation: "Your verified information",
        verifiedInformationInfo: "This is an overview of the verified information we have received from trusted sources.",
        defaultPreferred: "This icon indicates the information is used on 'your personal info' as default.",
        receivedOn: "on <strong>{{date}}</strong>",
        receivedOnInfo: "Received on <strong>{{date}}</strong>",
        validUntilDate: "valid until <strong>{{date}}</strong>",
        validUntilDateInfo: "Valid until <strong>{{date}}</strong>",
        removeLinkPrefix: "Remove this information",
        removeLinkPostfix: " from your eduID",
        banner: "Some services require that your identity is verified by a trusted party.",
        expiredBanner: "The verification of your identity has expired, please verify it again.",
        verifyNow: "Verify now",
        basic: "Your identity",
        contact: "Contact details",
        role: "Organisations",
        email: "Email address",
        name: "Name",
        chosenName: "First name",
        givenName: "Given name",
        validatedGivenName: "Verified given name",
        familyName: "Last name",
        validatedFamilyName: "Verified family name",
        validatedDayOfBirth: "Verified date of birth",
        linkedAccounts: "Your role(s)",
        addInstitution: "Add an organisation",
        proceedConext: "Proceed to add this via SURFconext",
        proceedVerify: "Proceed to add this via SURFconext or another Identity Provider",
        validated: "Validated information",
        firstAndLastName: "First and last name",
        firstAndLastNameInfo: "Your first and last name are not yet verified by a third party",
        verify: "Verify",
        student: "Proof of student",
        studentInfo: "You have not yet proven that you are a student in the Netherlands.",
        prove: "Prove",
        trusted: "Link with third party",
        trustedInfo: "You eduID account is not yet linked to a third party",
        link: "Link",
        institution: "Institution",
        affiliations: "Affiliation(s)",
        expires: "Link expires",
        expiresValue: "{{date}}",
        verifiedAt: "Verified by <strong>{{name}}</strong> on {{date}}",
        proceed: "Proceed",
        verified: "Verified",
        notVerified: "Not verified",
        editable: "Editable by you",
        nonEditable: "Verified by {{name}}",
        verifiedBy: "Verified by {{name}}",
        validUntil: "Valid until",
        from: "From {{name}}",
        verifyFirstAndLastName: {
            addInstitution: "Add institution",
            addInstitutionConfirmation: "When you proceed you will be asked to login at the institution you want to link to your eduID. First, select which institution you want to connect; then, login at that institution.<br/><br/>After a successful login you will come back here.",
        },
        remove: "Remove",
        atInstitution: "At {{name}}",
        studentRole: "Student",
        preferInstitution: "Prefer institution",
        preferredInstitutionInfo: "Do you want to use the following information to be the default information shared with services?",
        preferred: "{{name}} is now your preferred source of information",
        expired: "Expired",
        newInstitutionTitle: "was contacted successfully",
        newInstitutionInfo: "The following information has been added to your eduID.",
        ok: "Continue",
        yes: "Yes, please",
        no: "No, thanks",
        eppn: "EPPN",
        subjectId: "Subject ID",
        manageInformation: "Manage your verified information",
        noValidInformation: "{{name}} has not provided any valid information"
    },
    eppnAlreadyLinked: {
        header: "Connection not added!",
        info: "Your eduID could not be linked. The trusted account with which you just logged in, is already linked to a different eduID account: {{email}}.",
        infoNew: "You can't request an eduID account with the trusted account with which you just logged in. This institutional account is already linked to a different eduID account: {{email}}.",
        retryLink: "Retry"
    },
    edit: {
        title: "Name",
        info: "Please provide your full name",
        givenName: "Your first name",
        familyName: "Your last name",
        update: "Update",
        cancel: "Cancel",
        save: "Save",
        updated: "Your profile has been updated",
        back: "/personal",
        and: " and "
    },
    email: {
        title: "Email",
        info: "A verification mail will be sent to your new email.",
        email: "Your new email",
        update: "Request",
        cancel: "Cancel",
        updated: "A verification email has been sent to {{email}}",
        confirmed: "Your email address has been changed to {{email}}",
        back: "/personal",
        emailEquality: "Your new email address is the same as your current email",
        duplicateEmail: "This email address is already in use.",
        outstandingPasswordForgotten: "Outstanding password forgotten request",
        outstandingPasswordForgottenConfirmation: "You have requested a password forgotten link. This link will no longer be valid if you confirm your email change."
    },
    security: {
        title: "Security settings",
        subTitle: "We provide different methods to sign in to your eduID account.",
        secondSubTitle: "Other sign-in methods",
        usePassword: "Password",
        usePublicKey: "WebAuthn",
        notSet: "Not set",
        notSupported: "Not supported",
        useMagicLink: "Send magic link to",
        rememberMe: "Stay logged in",
        securityKey: "Security key {{nbr}}",
        test: "Test",
        addSecurityKey: "Add security key",
        addSecurityKeyInfo: "You can add security keys to your eduID account which can be used to login. You can use, for example, the built-in sensor of your device (TouchID, FaceID) or a separate hardware key (YubiKey).",
        settings: "Sign-in settings",
        rememberMeInfo: "<strong>Your device is currently remembered. You will be automatically logged in to eduID.</strong>",
        noRememberMeInfo: "When logging in with your eduID, you can choose to <strong>stay logged in</strong>. This remembers your login on the device you use at that moment.",
        forgetMe: "Forget me",
        tiqr: {
            title: "Want to sign in quicker and more secure next time?",
            info: "Get the <strong>eduID app</strong> and securely sign in without passwords or accessing your email.",
            fetch: "Get it now",
            deactivate: "Deactivate",
            backupCodes: "Recovery method",
            app: "eduID app",
            phoneId: "Phone ID",
            APNS: "iPhone",
            APNS_DIRECT: "iPhone",
            FCM: "Android",
            GCM: "Android",
            FCM_DIRECT: "Android",
            appCode: "Appcode",
            lastLogin: "Last login",
            activated: "Activated on",
            dateTimeOn: "on",
            backupMethod: "Recovery method",
            sms: "SMS",
            code: "Backup code"
        }
    },
    home: {
        home: "Home",
        welcome: "Welcome {{name}}",
        "data-activity": "Data & activity",
        personal: "Personal info",
        security: "Security",
        account: "Account",
        institutions: "Connections",
        services: "Services",
        favorites: "Favorites",
        settings: "Settings",
        links: {
            teams: "Teams",
            teamsHref: "https://teams.{{baseDomain}}"
        }
    },
    account: {
        title: "Your account",
        titleDelete: "Delete your eduID account",
        info: "On this page you can manage your account.",
        created: "Created on",
        delete: "Delete my account",
        cancel: "Cancel",
        deleteInfo: "Proceed with care, as you will lose the unique eduID identifiers currently associated wth your email address.",
        data: "Download your data",
        personalInfo: "Click the button left to download all your personal data from your eduID account.",
        downloadData: "Download",
        downloadDataConfirmation: "The download of your personal data from your eduID account contains all the information we have about you. It also contains technical keys and references.",
        deleteTitle: "Deleting your eduID account",
        info1: "You can delete your eduID whenever you want.",
        info2: "Proceed with care, as you will lose the unique eduID number currently associated with your email address. When you re-register for a new eduID with that same email address, you will receive a new eduID number. Some services use this unique number to identify you, so for those services you will be treated as a new user.",
        info3: "Please note that deleting your eduID account does not mean all services you accessed with that eduID account will also have your data removed.",
        info4: "To fully complete the process of deleting your eduID account you must close your browser after your account has been removed.",
        deleteAccount: "Delete my account",
        deleteAccountConfirmation: "Are you sure you want to delete your eduID account?",
        deleteAccountSure: "Delete your account for all eternity?",
        deleteAccountWarning: "There is no way to undo this action.",
        proceed: "If you wish to proceed, please type in your full name for confirmation.",
        name: "Full name",
        namePlaceholder: "Your full name as used on your profile"
    },
    dataActivity: {
        title: "Data & Activity",
        info: "Each service you accessed through eduID receives certain personal data (attributes) from your eduID account. For example, your name, your email address or a pseudonym which the service can use to uniquely identify you.",
        explanation: "Apps you logged in to using eduID.",
        noServices: "You did not yet use eduID to login to any service.",
        name: "Name",
        add: "Connect new institution",
        access: "Can access your data",
        details: {
            login: "Login details",
            delete: "Delete login details",
            first: "First login",
            eduID: "Unique eduID",
            homePage: "Homepage",
            deleteDisclaimer: "Deleting these login details means eduID removes this information from your eduID account. You still have an account at the service itself. If you want that removed, please do so at the service.",
            access: "Access rights",
            details: "Access details",
            consent: "Date of consent",
            expires: "Date of expiry",
            revoke: "Revoke access"
        },
        deleteService: "Delete service",
        deleteServiceConfirmation: "Are you sure you want to delete your unique pseudonymised eduID for {{name}} and revoke access to your linked accounts?<br/><br/>This service might not recognize you the next time you login and all your personal data within this service might be lost.",
        deleteTokenConfirmation: "Are you sure you want to revoke the API access token for {{name}}?",
        deleteToken: "Revoke access token",
        deleted: "eduID removed",
        tokenDeleted: "Tokens removed"

    },
    institution: {
        title: "Connected institution",
        info: "This institution was connected to your eduID account on {{date}} at {{hours}}:{{minutes}}",
        name: "Institution name",
        eppn: "Identifier at institution",
        displayName: "Display name",
        affiliations: "Affiliation(s) at institution",
        expires: "This connection expires at",
        expiresValue: "{{date}}",
        delete: "Remove connection",
        cancel: "Cancel",
        deleted: "The information received from {{name}} has been removed",
        back: "/institutions",
        deleteInstitution: "Delete this information?",
        deleteInstitutionConfirmation: "Some applications you want to login to with eduID require validated information. By deleting this information you will not be able to login to those applications.<br/><br/>You might be prompted to validate your information again if you want to access them."
    },
    credential: {
        title: "Edit security key",
        info: "You added this security key on {{date}} at {{hours}}:{{minutes}}",
        name: "Security key name",
        cancel: "Cancel",
        update: "Update",
        deleted: "Your security key {{name}} has been deleted",
        updated: "Your security key {{name}} has been updated",
        back: "/weauthn",
        deleteCredential: "Delete security key",
        deleteCredentialConfirmation: "Are you sure you want to delete your security key {{name}}? The security key will be deleted from your eduID account, but will not be removed from your browser and/or Yubikey device."
    },
    password: {
        addTitle: "Add password",
        updateTitle: "Change password",
        addInfo: "If you want to add a password to your eduID account, press <strong>Confirm</strong> below to instantly receive an email with a link to add a password.",
        updateInfo: "If you want to reset or delete your password from your eduID account, press <strong>Confirm</strong> below to instantly receive an email with a link to change or delete your current password.",
        resetTitle: "Reset your password",
        newPassword: "New password",
        confirmPassword: "Confirm new password",
        setUpdate: "Set password",
        updateUpdate: "Update password",
        cancel: "Cancel",
        set: "Your password has been set",
        reset: "Your password has been reset to a new password",
        updated: "Your password has been updated",
        deleted: "Your password has been deleted",
        deletePassword: "Delete password",
        deletePasswordConfirmation: "Are you sure that you want to delete your password? Login with a password will be no longer possible.",
        back: "/security",
        passwordDisclaimer: "Make sure it's at least 15 characters OR at least 8 characters including a number and a uppercase letter.",
        invalidCurrentPassword: "Your current password is invalid.",
        passwordResetHashExpired: "Your password reset link has expired. ",
        forgotPassword: "Help! I forgot my current password",
        passwordResetSendAgain: "Send an email to reset my password.",
        forgotPasswordConfirmation: "Forgot your password? Press 'Confirm' below to instantly receive an email with a link to reset your current password.",
        outstandingEmailReset: "Outstanding email change request",
        outstandingEmailResetConfirmation: "You have an outstanding new email confirmation link. This link will no longer be valid if you confirm your password forgotten request.",
        flash: {
            passwordLink: "An email has been sent to {{name}} with a link to reset your password"
        }
    },
    webauthn: {
        setTitle: "Add security key",
        updateTitle: "Add security key",
        publicKeys: "Your public tokens",
        noPublicKeys: "You have not added any security keys. ",
        nameRequired: "Before you can add a new security key you must give it a name.",
        revoke: "Revoke",
        addDevice: "Add device",
        info: "You can choose to use a Bluetooth security key, USB security key or the security key built into your device.",
        back: "/security",
        setUpdate: "Start",
        updateUpdate: "Add device",
        credentialName: "Security key",
        credentialNamePlaceholder: "e.g. my red Yubikey",
        test: "Test",
        testInfo: "Click the <strong>test</strong> button to test one of your security keys. You will be redirected to the eduID login screen.",
        testFlash: "You successfully tested your security key to authenticate"
    },
    rememberMe: {
        updated: "Your device is no longer remembered",
        forgetMeTitle: "Remember this device.",
        info: "Your device is currently remembered. You will be automatically logged in to eduID.",
        cancel: "Cancel",
        update: "Forget me",
        forgetMeConfirmation: "Are you sure you no longer want this device remembered?",
        forgetMe: "Forget this device"
    },
    footer: {
        privacy: "Privacy policy",
        terms: "Terms of Use",
        help: "Help",
        poweredBy: "Powered by"
    },
    modal: {
        cancel: "Cancel",
        confirm: "Confirm",
        delete: "Yes, delete"
    },
    format: {
        creationDate: "{{date}} at {{hours}}:{{minutes}}"
    },
    getApp: {
        header: "Download the eduID app",
        info: "Download and install <a href=\"https://eduid.nl/help\" target=\"_blank\">the eduID app</a> (issued by SURF) on your mobile device.",
        google: "https://play.google.com/apps/testing/nl.eduid",
        apple: "https://testflight.apple.com/join/Ogk1TxKu",
        after: "When you've downloaded the eduID app on your phone, come back here and click next.",
        back: "Back",
        next: "Next"
    },
    sms: {
        header: "Check your phone",
        info: "Enter the six-digit code we sent to your phone to continue",
        codeIncorrect: "The code is incorrect",
        maxAttemptsPre: "Max attempts reached. Click",
        maxAttemptsPost: "to re-enter your phone number and receive a new verification",
        maxAttemptsPostNoReEnter: "to request a new verification",
        here: " here "
    },
    enrollApp: {
        header: "Finish setup in the eduID app",
        scan: "Scan this QR code with your eduID app",
        timeOut: "Session timeout",
        timeOutInfoFirst: "Your session timed out. Click this ",
        timeOutInfoLast: " to try again.",
        timeOutInfoLink: "link",
        openEduIDApp: "Open the app on this device",
        existingRegistration: "Existing registration",
        existingRegistrationInfoFirst: "You can't start a new registration as you already have a registration. Click this ",
        existingRegistrationInfoLast: " to reload your security settings.",
        existingRegistrationInfoLink: "link",
    },
    recovery: {
        header: "Set up a recovery method",
        changeHeader: "Change your recovery method",
        info: "If you can no longer use the eduID app, for example if your mobile phone is lost, you can register the eduID app again using the recovery method.",
        changeInfo: "You have successfully authenticated with the eduID app. You can now change your recovery method. ATTENTION: your current recovery method will be deactivated.",
        methods: "The following methods are available.",
        phoneNumber: "Add a recovery phone number.",
        phoneNumberInfo: "You'll receive a text message with a code.",
        backupCode: "Request a recovery code.",
        backupCodeInfo: "Keep this code in a safe place.",
        save: "Save the code somewhere safe.",
        active: "This code is now active and your eduID app is ready to use.",
        copy: "Copy the code",
        copied: "Copied",
        continue: "My code is safe. Continue",
        leaveConfirmation: "Are you sure you want to leave the page? Changes will not be saved."
    },
    phoneVerification: {
        header: "Add a recovery phone number",
        info: "Your phone number will be used for security purposes, so that you can re-register the eduID app if you lose it.",
        text: "We will text you a code to verify your number",
        verify: "Verify this phone number",
        placeHolder: "+31 612345678",
        phoneIncorrect: "Verification code is incorrect"
    },
    congrats: {
        header: "Success",
        info: "You can now use the eduID app to quickly log in to services that use eduID.",
        changeInfo: "You have changed your recovery method.",
        next: "Back to settings"
    },
    deactivate: {
        titleDelete: "Deactivate your eduID app",
        info: "You can deactivate your eduID app if you want to reinstall this app or if you have a new device.",
        recoveryCode: "Recovery code",
        recoveryCodeInfo: "Enter the <strong>recovery code</strong> you've saved during the eduID app registration.",
        verificationCode: "Text message verification code",
        codeIncorrect: "Wrong recovery code",
        next: "Next",
        deactivateApp: "Deactivate",
        sendSms: "Press next to send a verification code text message to your registered phone number",
        maxAttempts: "Max attempts used. Please contact <a href=\"mailto:help@eduid.nl\">help@eduid.nl</a> for support"
    },
    backupCodes: {
        title: "Recovery method",
        info: "You have installed and registered the eduID app. To change your recovery method, you must first authenticate with the eduID app.",
        phoneNumber: "Phone number",
        startTiqrAuthentication: "Change",
        code: "Code"
    },
    useApp: {
        header: "Check your eduID app",
        info: "We have sent a push-notification to your app, to verify it's you trying to sign in.",
        scan: "Scan this QR code with your eduID app",
        noNotification: "No notification?",
        qrCodeLink: "Create a QR code",
        qrCodePostfix: "and scan it.",
        offline: "When your device is offline, you must enter a",
        offlineLink: "one time code.",
        lost: "Lost your app?",
        lostLink: "Learn <a href=\"https://eduid.nl/help\" target=\"_blank\">how to register a new one</a>.",
        timeOut: "Session timeout",
        timeOutInfoFirst: "Your session timed out. Click this ",
        timeOutInfoLast: " to try again.",
        timeOutInfoLink: "link",
        responseIncorrect: "The response is invalid.",
        suspendedResult: "The verification from your eduID app failed. ",
        accountNotSuspended: "You can try again.",
        accountSuspended: "You'll have to wait {{minutes}} {{plural}} before you can try again.",
        minutes: "minutes",
        minute: "minute"
    },
    createFromInstitution: {
        title: "Create an eduID from your institution",
        header: "You are about to create an eduID account that will be linked to your institution account.",
        alreadyHaveAnEduID: "Already have an eduID account? <a href=\"{{location}}\">Login!</a>",
        info: "When you proceed you will be asked to login at the institution you want to link to your eduID. After a successful login you will come back here.",
        startFlow: "Start registration",
        welcome: "Your eduID account has been created",
        welcomeExisting: "Your eduID account has been linked to your insitutional account"
    },
    linkFromInstitution: {
        header: "Hi {{name}}",
        info: "You have successfully logged in at your institution. Please enter your personal email which will be your eduID email.",
        email: "Your email address",
        emailPlaceholder: "e.g. user@gmail.com",
        emailForbidden: "The creation of an eduID account for this email-domain is denied, please contact <a href=\"mailto:help@eduid.nl\">help@eduid.nl</a> if you think this email-domain is valid.",
        emailInUse1: "This email is already in use.",
        emailInUse2: "Try another, or ",
        emailInUse3: " link with this eduID account.",
        invalidEmail: "Invalid email",
        institutionDomainNameWarning: "It looks like you entered an institutional email address. Please note that when you no longer study at or work for that institution, you can no longer use that email address.",
        institutionDomainNameWarning2: "We recommend using your personal email address for eduID.",
        allowedDomainNamesError: "Domain name {{domain}} not allowed.",
        allowedDomainNamesError2: "eduID is restricted to be used only for allowed domains.",
        agreeWithTerms: "<span>I agree with <a tabindex='-1' href='https://eduid.nl/terms-of-use/' target='_blank'>the terms of service.</a> I also understand <a tabindex='-1' href='https://eduid.nl/privacy_policy/' target='_blank'>the privacy policy</a>.</span>",
        requestEduIdButton: "Request your eduID",
    },
    pollFromInstitution: {
        header: "Check your email!",
        info: "To sign in, click the link in the email we sent to <strong>{{email}}</strong>.",
        awaiting: "Waiting for you to click the link...",
        openGMail: "Open Gmail.com",
        openOutlook: "Open Outlook.com",
        spam: "Can't find the email? Check your spam folder.",
        loggedIn: "Login succeeded!",
        loggedInInfo: "You can close this tab / window.",
        timeOutReached: "Timeout!",
        timeOutReachedInfo: "Your link has expired. Please go back to the service you where heading to and try again.",
        resend: "Still can't find the email?",
        resendLink: "Send the email again.",
        mailResend: "Check your inbox again. We've sent another email with a validation link.",
    },
    weekDays: {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    },
    verify: {
        modal: {
            header: "Verification",
            info: {
                title: "Verification",
                please: "Please verify that you are who you say you are.",
                educationalInstitution: "Verify via a Dutch educational institution",
                selectInstitution: "Select your institution",
                other: "Other options...",
                verifyBank: "Verify with a Dutch bank app",
                selectBank: "Select your bank",
                verifyEuropeanId: "Verify with a European ID",
                supportEuropean: "We accept the ID's of Belgium, Denmark, Germany, Estonia,  Italy, Croatia, Lithuania, Latvia, Luxembourg, Malta, Portugal, Slovakia,  Spain, Czech Republic and Sweden.",
                useEuropean: "Use a European ID",
                help: "If you can't use any of the these methods, please visit our <a href='https://eduid.nl/help' target='_blank' rel='noreferrer'>support pages</a>"
            },
            bank: {
                select: "Select your bank",
                disclaimer: "With iDIN, we receive your name and date of birth from your bank. This way, we can be sure it is you. " +
                    "<strong>You are not making a payment</strong>. <a href='https://www.idin.nl/' target='_blank' rel='noreferrer'>More about iDIN.</a>",
                anotherMethodPrefix: "If your bank is not shown in the list, please select ",
                anotherMethodPostfix: "another method"
            }
        }

    }
};
