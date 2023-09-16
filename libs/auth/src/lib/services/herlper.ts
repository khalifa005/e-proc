import { MENU_ITEMS } from "@e-proc/core";
import { TranslateService } from "@ngx-translate/core";
import { UserRoleEnum } from "../enums/user-roles.enum";
import { AuthService } from "./auth.service";

export function sideMenuTranslationIntBasedOnPermissions(
  authService : AuthService,
   localizationService : TranslateService){
  const permissions =   authService.getRolePermissions(authService.getSelectedRole());
  const menuTranslated = MENU_ITEMS.map(u => ({ ...u, }));
  const roleId = authService.getSelectedRole();
  const isSuperAdmin = roleId == UserRoleEnum.SuperAdmin;

  if(permissions.length == 0 || permissions == null || permissions == undefined)
  {
    return [];
  }

  menuTranslated.forEach(item => {
    item.hidden = false;
    //-- check permissions
     if(!isSuperAdmin
     && item.title != "E-commerce"
     && item.data != undefined
     && item.data != null
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
          if(item.data == null || item.data == undefined)
          {
            //for items without data (permissions)
            item.hidden = false;
          }
          else
          {
            item.hidden = true;
          }
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
      if(
        !isSuperAdmin
        && permissions.length > 0
        && !permissions.includes(subItem.data)
        && subItem.data != undefined
        && subItem.data != null
        )
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
