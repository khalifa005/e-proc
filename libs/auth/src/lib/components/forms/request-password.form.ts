import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { RequestPasswordDto } from "../../models/request-password.model";
import { saudiMobileNummber } from "@e-proc/core";

export class RequestPasswordForm extends FormGroup{

    readonly mobilenumber = this.get('mobilenumber') as FormControl;
    readonly idType = this.get('idType') as FormControl;
    readonly idNumber = this.get('idNumber') as FormControl;
    readonly passportNumber = this.get('passportNumber') as FormControl;

constructor(readonly model: RequestPasswordDto , readonly fb: FormBuilder = new FormBuilder()){

 super(
    fb.group({
        mobilenumber :[model?.MobileNumber, [Validators.required, saudiMobileNummber]],
        idType : [model?.IDType , [Validators.required]],
        idNumber: [model?.IDNumber,[Validators.required,Validators.minLength(10),Validators.maxLength(10),numeric]],
        passportNumber: [model?.PassportNumber],
    }).controls
  );

  this.trackIDTypeValue();
}

private trackIDTypeValue(): void {
    const eventIdType =  this.idType.valueChanges.subscribe((idTypeValue: number) => {

        if (idTypeValue == 1) {
            this.idNumber.setValidators([Validators.required,Validators.minLength(10),Validators.maxLength(10),numeric]);
            this.passportNumber.clearValidators();
            this.passportNumber.reset();
        } else {
            this.passportNumber.setValidators([Validators.required]);
            this.idNumber.clearValidators();
            this.idNumber.reset();
        }

        this.idNumber.updateValueAndValidity();
        this.passportNumber.updateValueAndValidity();
    });
}

}
