//Internal API
import I18n from "../locale/I18n";
import {isEmpty} from "../utils/utils";

let csrfToken = null;

function validateResponse(res) {

    csrfToken = res.headers.get("x-csrf-token") || csrfToken;

    if (!res.ok) {
        if (res.type === "opaqueredirect") {
            setTimeout(() => window.location.reload(), 100);
            return res;
        }
        throw res;
    }

    return res.json();
}

function validFetch(path, options) {
    options = options || {};
    options.credentials = "same-origin";
    options.redirect = "manual";
    options.headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Accept-Language": I18n.currentLocale(),
        "X-CSRF-TOKEN": csrfToken
    };
    return fetch(path, options).then(res => validateResponse(res));
}

function fetchDelete(path) {
    return validFetch(path, {method: "delete"});
}

function fetchJson(path, options = {}) {
    return validFetch(path, options);
}

function postPutJson(path, body, method) {
    return fetchJson(path, {method, body: JSON.stringify(body)});
}

//Base
export function me() {
    return fetchJson("/myconext/api/sp/me");
}

export function configuration() {
    return fetchJson("/config");
}

export function updateUser(user) {
    return postPutJson("/myconext/api/sp/update", user, "PUT");
}

export function preferLinkedAccount(linkedAccount) {
    const updateLinkedAccountRequest = {
        eduPersonPrincipalName: linkedAccount.eduPersonPrincipalName,
        subjectId: linkedAccount.subjectId,
        external: linkedAccount.external,
        idpScoping: linkedAccount.idpScoping,
        schacHomeOrganization: linkedAccount.schacHomeOrganization
    }
    return postPutJson("/myconext/api/sp/prefer-linked-account", updateLinkedAccountRequest, "PUT");
}

export function updateEmail(user, force) {
    const forceParam = force ? "?force=true" : "";
    return postPutJson(`/myconext/api/sp/email${forceParam}`, user, "PUT");
}

export function confirmEmail(hash) {
    return fetchJson(`/myconext/api/sp/confirm-email?h=${hash}`);
}

export function outstandingEmailLinks() {
    return fetchJson("/myconext/api/sp/outstanding-email-links");
}

export function updatePassword(userId, newPassword, hash) {
    const body = {userId, newPassword, hash};
    return postPutJson("/myconext/api/sp/update-password", body, "PUT");
}

export function resetPasswordLink() {
    return postPutJson("/myconext/api/sp/reset-password-link", {}, "PUT");
}

export function resetPasswordHashValid(hash) {
    return fetchJson(`/myconext/api/sp/password-reset-hash-valid?hash=${hash}`);
}

export function createUserControlCode(firstName, lastName, dayOfBirth) {
    const body = {firstName, lastName, dayOfBirth};
    return postPutJson("/myconext/api/sp/control-code", body, "POST");
}

export function deleteUserControlCode() {
    return fetchDelete("/myconext/api/sp/control-code");
}

export function startWebAuthFlow() {
    return fetchJson("/myconext/api/sp/security/webauthn");
}

export function deleteUser() {
    const fetchOptions = {
        credentials: "same-origin",
        redirect: "manual"
    };
    return fetchDelete("/myconext/api/sp/delete").then(() => fetch("/Shibboleth.sso/Logout", fetchOptions));
}

export function deleteLinkedAccount(linkedAccount) {
    const updateLinkedAccountRequest = {
        eduPersonPrincipalName: linkedAccount.eduPersonPrincipalName,
        subjectId: linkedAccount.subjectId,
        external: linkedAccount.external,
        idpScoping: linkedAccount.idpScoping,
        schacHomeOrganization: linkedAccount.schacHomeOrganization
    }
    return postPutJson("/myconext/api/sp/institution", updateLinkedAccountRequest, "PUT");
}

export function deletePublicKeyCredential(credential) {
    return postPutJson("/myconext/api/sp/credential", credential, "PUT");
}

export function updatePublicKeyCredential(credential) {
    return postPutJson("/myconext/api/sp/credential", credential, "POST");
}

export function deleteServiceAndTokens(serviceProviderEntityId, tokens) {
    return postPutJson("/myconext/api/sp/service", {serviceProviderEntityId, tokens}, "PUT");
}

export function deleteTokens(tokens) {
    return postPutJson("/myconext/api/sp/tokens", {tokens}, "PUT");
}

export function oidcTokens() {
    return fetchJson("/myconext/api/sp/tokens");
}

export function startLinkAccountFlow() {
    return fetchJson("/myconext/api/sp/oidc/link");
}

export function startVerifyAccountFlow(idpScoping, bankId) {
    const bankIdParam = isEmpty(bankId) ? "" : `&bankId=${bankId}`;
    return fetchJson(`/myconext/api/sp/verify/link?idpScoping=${idpScoping}${bankIdParam}`);
}

export function iDINIssuers() {
    return fetchJson("/myconext/api/sp/idin/issuers");
}

export function logout() {
    const fetchOptions = {
        credentials: "same-origin",
        redirect: "manual"
    };
    return forgetMe().then(() =>
        fetchJson("/myconext/api/sp/logout").then(() => fetch("/Shibboleth.sso/Logout", fetchOptions))
    );
}

export function forgetMe() {
    return fetchDelete("/myconext/api/sp/forget");
}

export function testWebAutnUrl() {
    return fetchJson("/myconext/api/sp/testWebAuthnUrl");
}

//Tiqr
export function validatePhoneCode(phoneVerification) {
    return postPutJson(`/tiqr/sp/verify-phone-code`, {phoneVerification}, "POST")
}

export function startEnrollment() {
    return fetchJson(`/tiqr/sp/start-enrollment`);
}

export function finishEnrollment() {
    return fetchJson(`/tiqr/sp/finish-enrollment`);
}

export function pollEnrollment(enrollmentKey) {
    return fetchJson(`/tiqr/poll-enrollment?enrollmentKey=${enrollmentKey}`)
}

export function generateBackupCode() {
    return fetchJson(`/tiqr/sp/generate-backup-code`)
}

export function textPhoneNumber(phoneNumber) {
    return postPutJson(`/tiqr/sp/send-phone-code`, {phoneNumber}, "POST")
}

export function deactivateApp(verificationCode) {
    return postPutJson(`/tiqr/sp/deactivate-app`, {verificationCode}, "POST")
}

export function sendDeactivationPhoneCode() {
    return fetchJson("/tiqr/sp/send-deactivation-phone-code")
}

// Create from institution
export function startCreateFromInstitutionFlow(forceAuth = false) {
    return fetchJson("/myconext/api/sp/create-from-institution?forceAuth=" + forceAuth);
}

export function createInstitutionEduID(email, hash, newUser) {
    const body = {email, hash, newUser}
    return postPutJson("/myconext/api/sp/create-from-institution/email", body, "POST");
}

export function fetchInstitutionEduID(hash) {
    return fetchJson("/myconext/api/sp/create-from-institution/info?hash=" + hash);
}

export function institutionalEmailDomains() {
    return fetchJson("/myconext/api/sp/create-from-institution/domain/institutional")
}

export function allowedEmailDomains() {
    return fetchJson("/myconext/api/sp/create-from-institution/domain/allowed")
}

export function createFromInstitutionPoll(hash) {
    return fetchJson("/myconext/api/sp/create-from-institution/poll?hash=" + hash)
}

export function resendCreateFromInstitutionMail(hash) {
    return fetchJson("/myconext/api/sp/create-from-institution/resendMail?hash=" + hash)
}

// change recovery method endpoints
export function startTiqrAuthentication() {
    return postPutJson("/tiqr/sp/start-authentication", {}, "POST");
}

export function pollAuthentication(sessionKey) {
    return fetchJson(`/tiqr/sp/poll-authentication?sessionKey=${sessionKey}`)
}

export function manualResponse(sessionKey, response) {
    return postPutJson("/tiqr/sp/manual-response", {sessionKey, response}, "POST")
}

export function regenerateBackupCode() {
    return fetchJson(`/tiqr/sp/re-generate-backup-code`)
}

export function reTextPhoneNumber(phoneNumber) {
    return postPutJson(`/tiqr/sp/re-send-phone-code`, {phoneNumber}, "POST")
}

export function reValidatePhoneCode(phoneVerification) {
    return postPutJson(`/tiqr/sp/re-verify-phone-code`, {phoneVerification}, "POST")
}

export function reportError(error) {
    return postPutJson("/myconext/api/sp/error", error, "post");
}


