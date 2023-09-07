// import { AuthService } from '@e-proc/core';
// import { TranslateService } from '@ngx-translate/core';
import { NgxPermissionsService } from 'ngx-permissions';
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prefer-const */
/* eslint-disable no-var */

export function convertToFormData( dto: any ) {
  const formData = new FormData();

  for ( const key of Object.keys(dto) ) {
    const value = dto[key];
    let typeOfCurrentValue =  typeof(value) ;

    if(isFileArray(value)){
      for (let i = 0; i < value.length; i++) {
        let file: File = value[i];
        formData.append('files', file, file.name);    // the filed name is `files` because the server side declares a `Files` property
      }
    }

    if(typeOfCurrentValue == 'object' && !isFileArray(value))
    {
      if(Array.isArray(value)){
        formData.append(key , JSON.stringify(value));

      }
      else if (value != 'null' && value != null && value instanceof Date){
        formData.append(key, value.toDateString());
      }
      else if (value === 'null' ||value === null || value === 'undifined' && !isFileArray(value) ){
        formData.append(key, '');
      }
    }
    else if (value === 'null' ||value === null || value === 'undifined' ){
      formData.append(key, '');
    }
    else
    {
      if(!isFileArray(value)){
        formData.append(key, value);
      }

    }

  }

  return formData;
}

export function isFileArray(data: any[]): boolean {
  return Array.isArray(data) && data.every((value) => value instanceof File);
}


export function SetNavigateBackUrl(url:string) {
  sessionStorage.setItem("return_URL", url);
}

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

/**
 * load permissions based on user active role
 * @param permissionsService
 * @@param roleFunctions
 */
export function loadPermissions(permissionsService : NgxPermissionsService, roleFunctions : string []){
  //-- Remove All Permessions
  permissionsService.flushPermissions();

  //-- load new functions
  permissionsService.loadPermissions(roleFunctions, (permissionName, permissionStore) => {
    return !!permissionStore[permissionName as string];
   });
}

// export function sideMenuTranslationInt(authService : AuthService, localizationService : TranslateService){
//   var permissions =   authService.getRolePermissions(authService.getSelectedRole());
//   const menuTranslated = MENU_ITEMS.map(u => ({ ...u, }));

//   menuTranslated.forEach(item => {
//     item.hidden = false;
//     //-- check permissions
//      if(authService.getSelectedRole() != UserRoleEnum.SuperAdmin && item.title!="E-commerce" &&  permissions.length > 0 && !permissions.includes(item.data))
//      {
//          //-- In Case Has Childerns check data to
//          if(item.children)
//          {
//             for(const subElement of item.children)
//             {
//                if(permissions.includes(subElement.data))
//                {
//                  item.hidden = false;
//                  break;
//                }
//                else
//                {
//                  item.hidden = true;
//                }
//             }
//          }
//          else
//          {
//              item.hidden = true;
//          }
//      }

//     localizationService.get(item.title).subscribe((text:string) => {
//       item.title = text
//   });


//     if(item.children){
//      const subMenuTranslated = item.children.map(u => ({ ...u, }));

//      subMenuTranslated.forEach(subItem => {
//       subItem.hidden = false;
//       //-- check permissions
//       if(authService.getSelectedRole() != UserRoleEnum.SuperAdmin && permissions.length > 0 && !permissions.includes(subItem.data))
//       {
//          subItem.hidden = true;
//       }

//       localizationService.get(subItem.title).subscribe((text:string) => {
//           subItem.title = text
//         });
//       });

//       item.children = subMenuTranslated;
//     }

//   });
//   //  log.info(MENU_ITEMS);
//    return menuTranslated;
//  }

