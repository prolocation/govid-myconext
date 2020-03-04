package myconext.api;

import myconext.exceptions.OpenRedirectException;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLDecoder;
import java.nio.charset.Charset;
import java.util.HashMap;
import java.util.Map;

import static myconext.security.GuestIdpAuthenticationRequestFilter.REGISTER_MODUS_COOKIE_NAME;

@RestController
public class LoginController {

    private static final Log LOG = LogFactory.getLog(LoginController.class);

    private String redirectUrl;
    private boolean secureCookie;

    private final Map<String, String> config = new HashMap<>();

    public LoginController(@Value("${base_path}") String basePath,
                           @Value("${base_domain}") String baseDomain,
                           @Value("${branding}") String branding,
                           @Value("${my_conext_url}") String myConextUrl,
                           @Value("${onegini_entity_id}") String oneGiniEntityId,
                           @Value("${guest_idp_entity_id}") String guestIdpEntityId,
                           @Value("${sp_redirect_url}") String redirectUrl,
                           @Value("${email.magic-link-url}") String magicLinkUrl,
                           @Value("${secure_cookie}") boolean secureCookie,
                           @Value("${idp_redirect_url}") String idpBaseUrl) {
        this.config.put("loginUrl", basePath + "/login");
        this.config.put("baseDomain", baseDomain);
        this.config.put("branding", branding);
        this.config.put("migrationUrl", String.format("%s/Shibboleth.sso/Login?entityID=%s&target=/startSSO?redirect_url=/migration", myConextUrl, oneGiniEntityId));
        this.config.put("magicLinkUrl", magicLinkUrl);
        this.config.put("eduIDLoginUrl", String.format("%s/Shibboleth.sso/Login?entityID=%s", myConextUrl, guestIdpEntityId));
        this.config.put("eduIDRegisterUrl", String.format("%s/register", idpBaseUrl));
        this.redirectUrl = redirectUrl;
        this.secureCookie = secureCookie;
    }

    @GetMapping("/register")
    public void register(HttpServletResponse response) throws IOException {
        response.setHeader("Set-Cookie", REGISTER_MODUS_COOKIE_NAME + "=true; SameSite=Lax" + (secureCookie ? "; Secure" : ""));
        response.sendRedirect(this.config.get("eduIDLoginUrl"));
    }

    @GetMapping("/config")
    public Map<String, String> config() {
        return config;
    }

    @GetMapping("/login")
    public void login(HttpServletRequest request, HttpServletResponse response, @RequestParam("redirect_path") String redirectPath)
            throws IOException, ServletException {
        SecurityContextHolder.clearContext();
        request.logout();

        String location = "/startSSO?redirect_url=" + redirectUrl + redirectPath;

        LOG.info("Sending redirect after /login to " + location);

        response.sendRedirect(location);
    }

    @GetMapping(value = "/startSSO")
    public void startSSO(HttpServletResponse response, @RequestParam("redirect_url") String redirectUrlPart) throws IOException {
        String decodedRedirectUrl = URLDecoder.decode(redirectUrlPart, Charset.defaultCharset().name());

        LOG.info("Attempt sending redirect after /startSSO to " + decodedRedirectUrl);
        //either it is a relative path or a path starting with the registered redirectUrl
        if (!decodedRedirectUrl.startsWith("/") && !decodedRedirectUrl.startsWith(this.redirectUrl)) {
            throw new OpenRedirectException("Illegal redirect: '" + decodedRedirectUrl + "'");
        }

        response.sendRedirect(decodedRedirectUrl);
    }

}
