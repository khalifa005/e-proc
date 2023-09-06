import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { LookupDto } from "@e-proc/core";

export class RoleForm extends FormGroup {

  readonly NameEn = this.get('NameEn') as FormControl;
  readonly NameAr = this.get('NameAr') as FormControl;
  readonly Description = this.get('Description') as FormControl;

  constructor(readonly model: LookupDto, readonly fb: FormBuilder = new FormBuilder())
  {
    super(

      fb.group({

        NameEn: [model?.NameEn, [Validators.required, Validators.max(200), Validators.min(4) ]],
        NameAr: [model?.NameAr, [Validators.required, Validators.max(200), Validators.min(4)]],
        Description: [model?.Description],

    }).controls

    );
  }
}
