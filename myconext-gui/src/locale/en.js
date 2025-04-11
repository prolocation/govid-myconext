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
        manage: "Manage your personal info, your privacy, and the security of your govID account.",
        app: {
            title: "Are you studying in NL? Connect your institution!",
            infoBold: "When you study in the Netherlands ",
            infoPart: "and you want to use govID to login to educational applications, we need to be sure it's you and not someone impersonating you.",
            requirements: "You must therefore add the following information to your govID",
            validatedName: "Validation of your full name by a third party",
            proofStudent: "Proof of being a student",
            institution: "Your current institution",
            connect: "Connect your school institution"
        }
    },
    header: {
        title: "govID",
        logout: "Logout"
    },
    landing: {
        logoutTitle: "You have been logged out",
        logoutStatus: "To finalise the logout process you must now close this browser.",
        loginAgain: "Login again",
        deleteTitle: "Your govID account has been deleted",
        deleteStatus: "To finalise the removal process you must now close this browser.",
        registerAgain: "Register again"
    },
    notFound: {
        title: "Whoops...",
        title2: "Something went wrong (404)."
    },
    profile: {
        title: "Your personal info",
        info: "When you use govID to logon to other websites, the following information can be shared.",
        verifiedInformation: "Your verified information",
        verifiedInformationInfo: "This is an overview of the verified information we have received from trusted sources.",
        defaultPreferred: "This icon indicates the information is used on 'your personal info' as default.",
        receivedOn: "on <strong>{{date}}</strong>",
        receivedOnInfo: "Received on <strong>{{date}}</strong>",
        validUntilDate: "valid until <strong>{{date}}</strong>",
        validUntilDateInfo: "Valid until <strong>{{date}}</strong>",
        removeLinkPrefix: "Remove this information",
        removeLinkPostfix: " from your govID",
        banner: "Some applications require that your identity is verified by a trusted party.",
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
        validatedAffiliations: "Verified affiliations",
        linkedAccounts: "Your role(s)",
        addInstitution: "Add an organisation",
        addInstitutionInfo: "By adding an organisation to your govID, you prove that you are a student or employee of that organisation. This also verifies your govID.",
        addInstitutionAction: "Add your organisation by logging in",
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
        trustedInfo: "You govID account is not yet linked to a third party",
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
            addInstitutionConfirmation: "When you proceed you will be asked to login at the institution you want to link to your govID. First, select which institution you want to connect; then, login at that institution.<br/><br/>After a successful login you will come back here.",
        },
        remove: "Remove",
        atInstitution: "At {{name}}",
        studentRole: "Student",
        preferInstitution: "Verify your identity",
        personalInfo: "Your personal info",
        preferredInstitutionInfo: "We also have received new information. Do you want to use this for your govID?",
        preferred: "{{name}} is now your preferred source of information",
        expired: "Expired",
        newInstitutionTitle: "was contacted successfully",
        newInstitutionInfo: "The following information has been added to your govID and can now be shared.",
        newInstitutionInfoAttributes: "We have received the following information which we will use for your govID.",
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
        info: "Your govID could not be linked. The trusted account with which you just logged in, is already linked to a different govID account: {{email}}.",
        infoNew: "You can't request an govID account with the trusted account with which you just logged in. This institutional account is already linked to a different govID account: {{email}}.",
        retryLink: "Retry"
    },
    attributeMissing: {
        header: "Connection not added!",
        info: "Your govID could not be linked. The trusted account with which you just logged in, did not provide an EPPN.",
        infoNew: "You can't request an govID account with the trusted account with which you just logged in. The account did not provide an EPPN.",
        retryLink: "Retry"
    },
    subjectAlreadyLinked: {
        header: "Verification failed!",
        info: "Your govID could not be verified. The external account with which you just logged in, is already linked to a different govID account.",
        retryLink: "Retry"
    },
    externalAccountLinkedError: {
        header: "Verification failed!",
        info: "Your govID could not be verified. The trusted party you selected returned an error.",
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
        subTitle: "Settings and recommendations to help you keep your govID account secure.",
        banner: "Stay safe. Add more security to your govID account. Choose one of the recommended security methods.",
        otherMethods: "Other methods",
        recommendedOptions: "Recommended methods",
        currentSignInOptions: "How you can sign in with govID",
        usePassword: "Password",
        usePublicKey: "WebAuthn",
        notSet: "Not set",
        notSupported: "Not supported",
        magicLinkOption: "Magic link email",
        useMagicLink: "Send magic link to",
        rememberMe: "Stay logged in",
        securityKey: "Passkey {{nbr}}",
        test: "Test",
        securityKeys: "Your passkeys",
        addSecurityKey: "Add passkey",
        addSecurityKeyInfo: "You can add passkeys to your govID account which can be used to login. You can use, for example, the built-in sensor of your device (TouchID, FaceID) or a separate hardware key (YubiKey).",
        settings: "Sign-in settings",
        rememberMeInfo: "<strong>Your device is currently remembered. You will be automatically logged in to govID.</strong>",
        noRememberMeInfo: "When logging in with your govID, you can choose to <strong>stay logged in</strong>. This remembers your login on the device you use at that moment.",
        forgetMe: "Forget me",
        options: {
            app: "govID mobile app",
            password: "Password",
            passwordAdd: "Add a password",
            passkey: "Passkey",
            passkeyAdd: "Add a passkey"
        },
        tiqr: {
            title: "Want to sign in quicker and more secure next time?",
            info: "Get the <strong>govID app</strong> and securely sign in without passwords or accessing your email.",
            fetch: "Get it now",
            deactivate: "Deactivate your govID mobile app",
            backupCodes: "Recovery options",
            app: "govID app",
            phoneId: "Phone ID",
            APNS: "iPhone",
            APNS_DIRECT: "iPhone",
            FCM: "Android",
            GCM: "Android",
            FCM_DIRECT: "Android",
            appCode: "Appcode",
            lastLogin: "Last login on {{date}}",
            activated: "Activated on {{date}}",
            dateTimeOn: "on",
            backupMethod: "Recovery method",
            sms: "SMS/Text message",
            smsInfo: "You'll receive one-time codes at: {{phone}}",
            getSmsInfo: "Receive one-time codes on your mobile",
            code: "Backup code",
            getCode: "Request a code",
            codeInfo: "Stored somewhere safe hopefully",
            getCodeInfo: "And store it somewhere safe",
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
        services: "Applications",
        favorites: "Favorites",
        settings: "Settings",
        links: {
            teams: "Teams",
            teamsHref: "https://teams.{{baseDomain}}"
        }
    },
    account: {
        title: "Your account",
        titleDelete: "Delete your govID account",
        info: "On this page you can manage your account.",
        created: "Created on",
        delete: "Delete my account",
        cancel: "Cancel",
        deleteInfo: "Proceed with care, as you will lose the unique govID identifiers currently associated wth your email address.",
        data: "Download your data",
        personalInfo: "Click the button left to download all your personal data from your govID account.",
        downloadData: "Download",
        downloadDataConfirmation: "The download of your personal data from your govID account contains all the information we have about you. It also contains technical keys and references.",
        deleteTitle: "Deleting your govID account",
        info1: "You can delete your govID whenever you want.",
        info2: "Proceed with care, as you will lose the unique govID number currently associated with your email address. When you re-register for a new govID with that same email address, you will receive a new govID number. Some applications use this unique number to identify you, so for those applications you will be treated as a new user.",
        info3: "Please note that deleting your govID account does not mean all applications you accessed with that govID account will also have your data removed.",
        info4: "To fully complete the process of deleting your govID account you must close your browser after your account has been removed.",
        deleteAccount: "Delete my account",
        deleteAccountConfirmation: "Are you sure you want to delete your govID account?",
        deleteAccountSure: "Delete your account for all eternity?",
        deleteAccountWarning: "There is no way to undo this action.",
        proceed: "If you wish to proceed, please type in the word 'Delete' for confirmation.",
        name: "Full name",
        namePlaceholder: "Your full name as used on your profile",
        confirmation: "Confirmation",
        confirmationPlaceholder: "Delete",
    },
    dataActivity: {
        title: "Data & Activity",
        info: "Each application you accessed through govID receives certain personal data from your govID account. For example, your name, your email address or a unique govID number which the application can use to identify you.",
        explanation: "Apps you logged in to using govID.",
        noServices: "You did not yet use govID to login to any application.",
        name: "Name",
        add: "Connect new institution",
        access: "Can access your data",
        details: {
            login: "Login details",
            delete: "Delete login details",
            first: "First login",
            last: "Last login",
            govID: "Unique govID",
            homePage: "Homepage",
            deleteDisclaimer: "Deleting these login details means govID removes this information from your govID account. You still have an account at the application itself. If you want that removed, please do so at the application.",
            access: "Access rights",
            details: "Access details",
            consent: "Date of consent",
            expires: "Date of expiry",
            revoke: "Revoke access"
        },
        deleteService: "Delete application",
        deleteServiceConfirmation: "Are you sure you want to delete the application {{name}}?<br/><br/>This application might not recognize you the next time you login and all your personal data within this application might be lost.",
        deleteTokenConfirmation: "Are you sure you want to revoke access for {{name}}?",
        deleteToken: "Revoke access token",
        deleted: "govID removed",
        tokenDeleted: "Tokens removed"

    },
    institution: {
        title: "Connected institution",
        info: "This institution was connected to your govID account on {{date}} at {{hours}}:{{minutes}}",
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
        deleteInstitutionConfirmation: "Some applications you want to login to with govID require validated information. By deleting this information you will not be able to login to those applications.<br/><br/>You might be prompted to validate your information again if you want to access them."
    },
    credential: {
        title: "Edit passkey",
        info: "You added this passkey on {{date}} at {{hours}}:{{minutes}}",
        name: "Passkey name",
        cancel: "Cancel",
        update: "Update",
        deleted: "Your passkey {{name}} has been deleted",
        updated: "Your passkey {{name}} has been updated",
        back: "/weauthn",
        deleteCredential: "Delete passkey",
        deleteCredentialConfirmation: "Are you sure you want to delete your passkey {{name}}? The passkey will be deleted from your govID account, but will not be removed from your browser and/or Yubikey device."
    },
    password: {
        addTitle: "Add password",
        updateTitle: "Change password",
        addInfo: "If you want to add a password to your govID account, press <strong>Confirm</strong> below to instantly receive an email with a link to add a password.",
        updateInfo: "If you want to reset or delete your password from your govID account, press <strong>Confirm</strong> below to instantly receive an email with a link to change or delete your current password.",
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
        setTitle: "Add passkey",
        updateTitle: "Add passkey",
        publicKeys: "Your public tokens",
        noPublicKeys: "You have not added any security keys. ",
        nameRequired: "Before you can add a new security key you must give it a name.",
        revoke: "Revoke",
        addDevice: "Add device",
        info: "You can choose to use a Bluetooth security key, USB security key or the security key built into your device.",
        back: "/security",
        setUpdate: "Start",
        updateUpdate: "Add device",
        credentialName: "Passkey",
        credentialNamePlaceholder: "e.g. my red Yubikey",
        test: "Test",
        testInfo: "Click the <strong>test</strong> button to test one of your security keys. You will be redirected to the govID login screen.",
        testFlash: "You successfully tested your security key to authenticate"
    },
    rememberMe: {
        updated: "Your device is no longer remembered",
        forgetMeTitle: "Remember this device.",
        info: "Your device is currently remembered. You will be automatically logged in to govID.",
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
        header: "Download the govID app",
        info: "Download and install <a href=\"https://https://wiki.support.govroam.nl/wiki/spaces/govconext/pages/298582021/govID\" target=\"_blank\">the govID app</a> (issued by SURF) on your mobile device.",
        google: "https://play.google.com/store/apps/details?id=nl.eduid",
        apple: "https://apps.apple.com/nl/app/eduid/id1600756434?l=en-GB",
        after: "When you've downloaded the govID app on your phone, come back here and click next.",
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
        header: "Finish setup in the govID app",
        scan: "Scan this QR code with your govID app",
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
        info: "If you can no longer use the govID app, for example if your mobile phone is lost, you can register the govID app again using the recovery method.",
        changeInfo: "You have successfully authenticated with the govID app. You can now change your recovery method. ATTENTION: your current recovery method will be deactivated.",
        methods: "The following methods are available.",
        phoneNumber: "Add a recovery phone number.",
        phoneNumberInfo: "You'll receive a text message with a code.",
        backupCode: "Request a recovery code.",
        backupCodeInfo: "Keep this code in a safe place.",
        save: "Save the code somewhere safe.",
        active: "This code is now active and your govID app is ready to use.",
        copy: "Copy the code",
        copied: "Copied",
        continue: "My code is safe. Continue",
        leaveConfirmation: "Are you sure you want to leave the page? Changes will not be saved."
    },
    phoneVerification: {
        header: "Add a recovery phone number",
        info: "Your phone number will be used for security purposes, so that you can re-register the govID app if you lose it.",
        text: "We will text you a code to verify your number",
        verify: "Verify this phone number",
        placeHolder: "+31 612345678",
        phoneIncorrect: "Verification code is incorrect"
    },
    congrats: {
        header: "Success",
        info: "You can now use the govID app to quickly log in to applications that use govID.",
        changeInfo: "You have changed your recovery method.",
        next: "Back to settings"
    },
    deactivate: {
        titleDelete: "Deactivate your govID app",
        info: "You can deactivate your govID app if you want to reinstall this app or if you have a new device.",
        recoveryCode: "Recovery code",
        recoveryCodeInfo: "Enter the <strong>recovery code</strong> you've saved during the govID app registration.",
        verificationCode: "Text message verification code",
        codeIncorrect: "Wrong recovery code",
        next: "Next",
        deactivateApp: "Deactivate",
        sendSms: "Press next to send a verification code text message to your registered phone number",
        maxAttempts: "Max attempts used. Please contact <a href=\"mailto:help@govid.nl\">help@govid.nl</a> for support"
    },
    backupCodes: {
        title: "Recovery method",
        info: "You have installed and registered the govID app. To change your recovery method, you must first authenticate with the govID app.",
        phoneNumber: "Phone number",
        startTiqrAuthentication: "Change",
        code: "Code"
    },
    useApp: {
        header: "Check your govID app",
        info: "We have sent a push-notification to your app, to verify it's you trying to sign in.",
        scan: "Scan this QR code with your govID app",
        noNotification: "No notification?",
        qrCodeLink: "Create a QR code",
        qrCodePostfix: "and scan it.",
        offline: "When your device is offline, you must enter a",
        offlineLink: "one time code.",
        lost: "Lost your app?",
        lostLink: "Learn <a href=\"https://https://wiki.support.govroam.nl/wiki/spaces/govconext/pages/298582021/govID\" target=\"_blank\">how to register a new one</a>.",
        timeOut: "Session timeout",
        timeOutInfoFirst: "Your session timed out. Click this ",
        timeOutInfoLast: " to try again.",
        timeOutInfoLink: "link",
        responseIncorrect: "The response is invalid.",
        suspendedResult: "The verification from your govID app failed. ",
        accountNotSuspended: "You can try again.",
        accountSuspended: "You'll have to wait {{minutes}} {{plural}} before you can try again.",
        minutes: "minutes",
        minute: "minute"
    },
    createFromInstitution: {
        title: "Create an govID from your institution",
        header: "You are about to create an govID account that will be linked to your institution account.",
        alreadyHaveAnEduID: "Already have an govID account? <a href=\"{{location}}\">Login!</a>",
        info: "When you proceed you will be asked to login at the institution you want to link to your govID. After a successful login you will come back here.",
        startFlow: "Start registration",
        welcome: "Your govID account has been created",
        welcomeExisting: "Your govID account has been linked to your insitutional account"
    },
    linkFromInstitution: {
        header: "Hi {{name}}",
        info: "You have successfully logged in at your institution. Please enter your personal email which will be your govID email.",
        email: "Your email address",
        emailPlaceholder: "e.g. user@gmail.com",
        emailForbidden: "The creation of an govID account for this email-domain is denied, please contact <a href=\"mailto:help@govid.nl\">help@govid.nl</a> if you think this email-domain is valid.",
        emailInUse1: "This email is already in use.",
        emailInUse2: "Try another, or ",
        emailInUse3: " link with this govID account.",
        invalidEmail: "Invalid email",
        institutionDomainNameWarning: "It looks like you entered an institutional email address. Please note that when you no longer study at or work for that institution, you can no longer use that email address.",
        institutionDomainNameWarning2: "We recommend using your personal email address for govID.",
        allowedDomainNamesError: "Domain name {{domain}} not allowed.",
        allowedDomainNamesError2: "govID is restricted to be used only for allowed domains.",
        agreeWithTerms: "<span>I agree with <a tabindex='-1' href='https://govroam.nl/aansluiten/voorwaarden/' target='_blank'>the terms of service.</a> I also understand <a tabindex='-1' href='https://govroam.nl/stichting-govroam/privacy/' target='_blank'>the privacy policy</a>.</span>",
        requestEduIdButton: "Request your govID",
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
        timeOutReachedInfo: "Your link has expired. Please go back to the application you where heading to and try again.",
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
            header: "Verify your identity",
            info: {
                subheader: "Verify your identity, quick and easy",
                title: "Verification",
                please: "Please verify that you are who you say you are.",
                educationalInstitution: "Verify via a Dutch educational institution",
                selectInstitution: "Select your institution",
                other: "Other options...",
                verifyBank: "Verify with a Dutch bank app",
                selectBank: "Select your bank",
                verifyEuropeanId: "Verify with a European ID",
                supportEuropean: "We accept the ID's of Austria, Belgium, Croatia, Czech Republic, Denmark, Estonia, Germany, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Poland, Portugal, Slovakia, Slovenia, Spain and Sweden.",
                useEuropean: "Use a European ID",
                help: "If you can't use any of the these methods, please visit our <a href='https://https://wiki.support.govroam.nl/wiki/spaces/govconext/pages/298582021/govID' target='_blank' rel='noreferrer'>support pages</a>"
            },
            bank: {
                select: "Select your bank",
                disclaimer: "With iDIN, we receive your name and date of birth from your bank. This way, we can be sure it is you. " +
                    "<strong>You are not making a payment</strong>. <a href='https://www.idin.nl/' target='_blank' rel='noreferrer'>More about iDIN.</a>",
                anotherMethodPrefix: "If your bank is not shown in the list, please select ",
                anotherMethodPostfix: "another method"
            }
        },
        issuers: {
            eherkenning: "eIDAS",
            idin: "Idin",
            studielink: "Studielink"
        }
    }
};
