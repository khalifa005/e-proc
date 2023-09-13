import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { OTPVerificationDto } from "../../models/otp-verification.model";
import { numeric } from "@e-proc/core";

export class OTPVerificationForm extends FormGroup{

    readonly otpCode = this.get('otpCode') as FormControl;
    readonly id = this.get('id') as FormControl;


constructor(readonly model: OTPVerificationDto , readonly fb: FormBuilder = new FormBuilder()){

 super(
    fb.group({
        id :[model?.Id],
        otpCode :[model?.OtpCode, [Validators.required, numeric]],
    }).controls
  );

}

}
