package myconext.model;

import lombok.*;

import javax.validation.constraints.NotNull;
import java.io.Serializable;

@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class CreateInstitutionEduID implements Serializable {

    @NotNull
    private String hash;

    @NotNull
    private String email;

    private boolean isNewUser;

}
