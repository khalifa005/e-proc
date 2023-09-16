import { MENU_ITEMS } from "@e-proc/core";
import { TranslateService } from "@ngx-translate/core";
import { UserRoleEnum } from "../enums/user-roles.enum";
import { AuthService } from "./auth.service";

export function sideMenuTranslationIntBasedOnPermissions(
  authService : AuthService,
   localizationService : TranslateService){
  const permissions =   authService.getRolePermissions(authService.getSelectedRole());
  const menuTranslated = MENU_ITEMS.map(u => ({ ...u, }));
  const role = authService.getSelectedRole();
  const isSuperAdmin = authService.getSelectedRole() == UserRoleEnum.SuperAdmin;

  if(permissions.length == 0 || permissions == null || permissions == undefined)
  {
    return [];
  }

  menuTranslated.forEach(item => {
    item.hidden = false;
    //-- check permissions
     if(!isSuperAdmin
     && item.title != "E-commerce"
     && !permissions.includes(item.data))
     {
         //-- In Case Has Childerns check data to
         if(item.children)
         {
            for(const subElement of item.children)
            {
               if(permissions.includes(subElement.data))
               {
                 item.hidden = false;
                 break;
               }
               else
               {
                 item.hidden = true;
               }
            }
         }
         else
         {
             item.hidden = true;
         }
     }

    localizationService.get(item.title).subscribe((text:string) => {
      item.title = text
  });


    if(item.children){
     const subMenuTranslated = item.children.map(u => ({ ...u, }));

     subMenuTranslated.forEach(subItem => {
      subItem.hidden = false;
      //-- check permissions
      if(!isSuperAdmin && permissions.length > 0 && !permissions.includes(subItem.data))
      {
         subItem.hidden = true;
      }

      localizationService.get(subItem.title).subscribe((text:string) => {
          subItem.title = text
        });
      });

      item.children = subMenuTranslated;
    }

  });
  //  log.info(MENU_ITEMS);
   return menuTranslated;
 }
