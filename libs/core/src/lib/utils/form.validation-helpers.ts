/* eslint-disable no-useless-escape */
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms"
//use this in form validation

// export const alpha: ValidatorFn = Validators.pattern('[a-zA-Z]*%content%#039;');
export const alphaArabic: ValidatorFn = Validators.pattern('^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){0,30}$');
export const alpha: ValidatorFn = Validators.pattern('[a-zA-Z]*$');
export const alphaAllowSpaces: ValidatorFn = Validators.pattern('[a-zA-Z ]*$');
export const alphaAllowSpacesAndSplash: ValidatorFn = Validators.pattern('[a-zA-Z /]*$');
export const alphaNumeric: ValidatorFn = Validators.pattern('[a-zA-Z0-9]*$');
export const alphaNumericAllowSpaces: ValidatorFn = Validators.pattern('[a-zA-Z0-9 ]*$');
export const alphaNumericAllowDash: ValidatorFn = Validators.pattern('[a-zA-Z0-9-]*$');
export const numericAllowDash: ValidatorFn = Validators.pattern('[0-9-]*$');
export const numeric: ValidatorFn = Validators.pattern('[0-9]*$');
export const currency: ValidatorFn = Validators.pattern('[0-9,]*$');
export const addressLine: ValidatorFn = Validators.pattern('(([0-9]{1,}).(.*[a-zA-Z#/&]){2,}$)|(([RRHC]{2,}).[0-9]{1,})|(([0-9]{1,}).(.*[a-zA-Z#/&]){2,}.(.*[0-9#])$)');
export const date: ValidatorFn = Validators.pattern('((0|1)d{1})((0|1|2|3)d{1})((19|20)d{2})');
export const email: ValidatorFn = Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,3}$');
export const saudiMobileNummber : ValidatorFn = Validators.pattern('^(5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$');

export const arabicCharacters: ValidatorFn = Validators.pattern('^[\u0600-\u06ff ]*$');
export const arabicCharactersWithNumbers: ValidatorFn = Validators.pattern('^[\u0600-\u06ff]^[0-9]*$');
export const englishAndArabicCharactersWithWhiteSpace: ValidatorFn = Validators.pattern('^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_\ ]*$');
export const englishAndArabicCharactersOnly: ValidatorFn = Validators.pattern('^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_]*$');
export function createPasswordStrengthValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

      const value = control.value;

      if (!value) {
          return null;
      }

      const hasUpperCase = /[A-Z]+/.test(value);

      const hasLowerCase = /[a-z]+/.test(value);

      const hasNumeric = /[0-9]+/.test(value);

      const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

      return !passwordValid ? {passwordStrength:true}: null;
  }
}


// export function confirmPasswordValidator(controlName: string , matchControlName: string): ValidatorFn{
//   return (formgroup : FormGroup)=>{
//     const passwordControl = formgroup.controls[controlName];
//     const confirmpasswordControl = formgroup.controls[matchControlName];

//     if(confirmpasswordControl.errors && confirmpasswordControl.errors['confirmPasswordValidator']){
//       return null;
//     }

//     if (passwordControl.value !== confirmpasswordControl.value) {
//         confirmpasswordControl.setErrors({ confirmPasswordValidator: true });
//     }
//     else{
//       return null;
//     }
//   }
// }

// export function emailConditionallyRequiredValidator(formControl: AbstractControl) {
//   if (!formControl.parent) {
//     return null;
//   }

//   if (formControl.parent.get('myCheckbox').value) {
//     return Validators.required(formControl);
//   }
//   return null;
// }

//
/**
 * makes the field required if the predicate function returns true
 * requiredIfValidator(() => this.myForm.get('myCheckbox').value)
 * conditionalValidator(() => this.myForm.get('myCheckbox').value,  pattern(/.+@.+\..+/),)
 */

// export function requiredIfValidator(predicate) {
//   return (formControl => {
//     console.log("requiredIfValidator - fun");
//     if (!formControl.parent) {
//       return null;
//     }
//     if (predicate()) {
//     console.log("requiredIfValidator - fun - predicate");

//       return Validators.required(formControl);
//     }
//     return null;
//   })
// }



export function RequiredFileType( type: string ) {
  return function (control: FormControl) {
    const file = control.value;
    if ( file ) {
      const extension = file.name.split('.')[1].toLowerCase();
      if ( type.toLowerCase() !== extension.toLowerCase() ) {
        return {
          requiredFileType: true
        };
      }

      return null;
    }

    return null;
  };
}

// export function RquiredFileUploadValidationSizeInMB(size: number) {
//   return function (control: FormControl) {
//     const file = control.value;
//     if ( file ) {
//       const extension = file.name.split('.')[1].toLowerCase();

//       let fileInKB = calculatedFileSizeInKB(size)
//       if (file.size > fileInKB ) {
//         return {
//           requiredFileSize: true
//         };
//       }

//       return null;
//     }

//     return null;
//   };

// }


export const validationMessages: ValidationErrors = {
    required: "Required",
    minlength: "Too Short",
    maxlength: "Too Long",
    pattern: "Forbidden Entry",
    email: "Invalid Entry",
    date: "Invalid Date"
  };
