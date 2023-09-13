import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { createPasswordStrengthValidator } from "@e-proc/core";
import { ForgetPasswordDto } from "../../models/forget-password.model";

export class ForgetPasswordForm extends FormGroup {

    readonly id = this.get('id') as FormControl;
    readonly newPassword = this.get('newPassword') as FormControl;
    readonly confirmPassword = this.get('confirmPassword') as FormControl;


    constructor(readonly model: ForgetPasswordDto, readonly fb: FormBuilder = new FormBuilder()) {

        super(

            fb.group({
                id :[model.Id],
                newPassword: [model?.NewPassword, [Validators.required, createPasswordStrengthValidator(),Validators.minLength(8)]],
                confirmPassword: [model?.ConfirmPassword, Validators.required],
            }).controls
        );


    }

}
