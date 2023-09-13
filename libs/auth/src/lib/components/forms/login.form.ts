import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginDto } from "../../models/login.model";

export class LoginForm extends FormGroup{

    readonly username = this.get('username') as FormControl;
    readonly password = this.get('password') as FormControl;


constructor(readonly model: LoginDto , readonly fb: FormBuilder = new FormBuilder()){

 super(
    fb.group({
        username :[model?.Username, [Validators.required]],
        password : [model?.Password, [Validators.required]],
    }).controls
  );

}

}
