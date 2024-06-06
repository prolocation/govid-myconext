package myconext.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class IdentityProviderNotFoundException extends RuntimeException {

    public IdentityProviderNotFoundException(String message) {
        super(message);
    }
}
