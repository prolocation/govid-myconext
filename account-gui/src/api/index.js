//Internal API
import I18n from "i18n-js";

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
    "Accept-Language": I18n.locale,
    "X-CSRF-TOKEN": csrfToken
  };
  return fetch(path, options).then(res => validateResponse(res));
}

function fetchJson(path, options = {}) {
  return validFetch(path, options);
}

function postPutJson(path, body, method) {
  return fetchJson(path, {method, body: JSON.stringify(body)});
}

//Base
export function magicLinkNewUser(email, givenName, familyName, rememberMe, authenticationRequestId) {
  const body = {user: {email, givenName, familyName}, authenticationRequestId, rememberMe};
  return postPutJson("/myconext/api/idp/magic_link_request", body, "POST");
}

export function magicLinkExistingUser(email, password, rememberMe, usePassword, authenticationRequestId) {
  const body = {user: {email, password}, authenticationRequestId, rememberMe, usePassword};
  return postPutJson("/myconext/api/idp/magic_link_request", body, "PUT");
}

export function configuration() {
  return fetchJson("/config");
}

export function webAuthnRegistration(token) {
  return postPutJson("/myconext/api/idp/security/webauthn/registration", {token}, "POST");
}

export function webAuthnRegistrationResponse(token, credentials, request) {
  return postPutJson("/myconext/api/idp/security/webauthn/registration", {token, credentials, request}, "PUT");
}

export function webAuthnStartAuthentication(email) {
  return postPutJson("/myconext/api/idp/security/webauthn/authentication", {email}, "POST");
}

export function webAuthnTryAuthentication(credentials, request, authenticationRequestId, rememberMe) {
  const body = {credentials, request, authenticationRequestId, rememberMe};
  return postPutJson("/myconext/api/idp/security/webauthn/authentication", body, "PUT");
}
