/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prefer-const */
/* eslint-disable no-var */
import { NgxPermissionsService } from "ngx-permissions";


export function isFileArray(data: any[]): boolean {
  return Array.isArray(data) && data.every((value) => value instanceof File);
}


export function SetNavigateBackUrl(url:string) {
  sessionStorage.setItem("return_URL", url);
}



// export function convertToFormData<T>( formValue: T ) {
//   const formData = new FormData();

//   for ( const key of Object.keys(formValue) ) {
//     const value = formValue[key];
//     let typeOfCurrentValue =  typeof(value) ;

//     if(isFileArray(value)){
//       // Array.from(value).map((file: File, index) => {
//       //   return formData.append('file'+index, file, file.name);
//       // });

//       for (let i = 0; i < value.length; i++) {
//         let file: File = value[i];
//         formData.append('files', file, file.name);    // the filed name is `files` because the server side declares a `Files` property
//         // formData.append('filess', file, file.name);
//       }
//     }

//     //to make these condition works pass object here not the FormDataValue
//     if(typeOfCurrentValue == 'object' && !isFileArray(value))
//     {
//       let testt = key;
//       if(Array.isArray(value)){
//         //this for the form array for post request it will work for form data recive the obj
//         //public List<EscalationLevelDto>? EscalationLevelss { get { return JsonSerializer.Deserialize<List<EscalationLevelDto>>(EscalationLevels)!; } }
//         //public string EscalationLevels { get; set; }
//         formData.append(key , JSON.stringify(value));

//       }
//       else if (value != 'null' && value != null && value instanceof Date){
//         formData.append(key, value.toDateString());
//       }
//       else if (value === 'null' ||value === null || value === 'undifined' && !isFileArray(value) ){
//         formData.append(key, '');
//       }

//       // else
//       // {
//       //   formData.append(key, value);
//       // }
//     }
//     else if (value === 'null' ||value === null || value === 'undifined' ){
//       formData.append(key, '');
//     }
//     else
//     {
//       if(!isFileArray(value)){
//         formData.append(key, value);
//       }

//     }

//   }

//   return formData;
// }

// export function onFileUploadValidationType(eventOrInput: HTMLInputEvent | HTMLInputElement, acceptedExtensions: string[], showWarning: boolean = false): boolean {

//   const target = (eventOrInput instanceof HTMLInputElement ? eventOrInput as HTMLInputElement : (eventOrInput as any).target as HTMLInputElement);

//   if (!target)
//     return false;

//   const files = target.files as FileList;

//   // no files attached, so no need to validate the extensions
//   if (files.length == 0)
//     return true;

//   // no extensions passed, so no need to validate the extensions
//   if (!acceptedExtensions || acceptedExtensions.length == 0)
//     return true;

//   const fileNameParts = files[0].name.split('.');
//   const fileExtension = fileNameParts[fileNameParts.length - 1].toLocaleLowerCase();
//   const fileType = files[0].type.toLocaleLowerCase();

//   for (const acceptedExtension of acceptedExtensions) {

//     if (
//       fileExtension === acceptedExtension.toLocaleLowerCase()
//       ||
//       fileType.startsWith(acceptedExtension.toLowerCase())
//     )
//       return true;
//   }

//   if (showWarning) {
//     this.ShowWarning("يجب أن يكون الملف المرفق من ضمن الأنواع التالية:\r\n" + this.replaceAll(acceptedExtensions.toString(), ",", ", "));
//   }

//   this.HtmlSetFocus(target);

//   return false;

// }

// export function onFileUploadValidationSize(event: HTMLInputEvent, size: number): boolean {
//   if (event.target.files.length > 0) {
//     const target = event.target as HTMLInputElement;
//     const files = target.files as FileList;
//     if (files[0].size < size)
//       return true;

//   }
//   return false;
// }

export function calculatedFileSizeInKB(sizeInMegaByte: number): number {

  const KBTMB : number = 1048576;

  return sizeInMegaByte * KBTMB;

}

export interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function GenerateRandomPassword() : string {
var pwdChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@";
var pwdLen = 10;
var randPassword = new Array(pwdLen).fill(0).map(x => (function(chars) { let umax = Math.pow(2, 32), r = new Uint32Array(1), max = umax - (umax % chars.length); do { crypto.getRandomValues(r); } while(r[0] > max); return chars[r[0] % chars.length]; })(pwdChars)).join('');


let password = Array(10)
.fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$")
.map(function(x) { return x[Math.floor(Math.random() * x.length)] })
.join('');

return password;
}
