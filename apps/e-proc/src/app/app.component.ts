/* eslint-disable @typescript-eslint/no-inferrable-types */
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { I18nService } from '@e-proc/core';
import { NbMenuItem } from '@nebular/theme';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'e-proc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  //here is the main page that will still appear in all the app
    menu!: NbMenuItem[];

  enableSide:boolean= true;

  // @ViewChild('menuItems')menuItemsRef!:NbMenuComponent;

    constructor(
      public localizationService: TranslateService,
      private changeDetectorRef: ChangeDetectorRef,
      private i18nService: I18nService,
      private router: Router)
      {
          this.sideMenuTranslationInt();
      }

      ngOnInit(): void {

        this.i18nService.init("ar-SA", ['en-US', 'ar-SA']);

        this.localizationService.onLangChange.subscribe((event: LangChangeEvent) => {
          this.sideMenuTranslationInt();

         });


    }

    sideMenuTranslationInt(){
      // var permissions =   this.authService.getRolePermissions(this.authService.getSelectedRole());
      const menuTranslated = MENU_ITEMS.map(u => ({ ...u, }));

      menuTranslated.forEach(item => {

        //-- check permissions
        //  if(this.authService.getSelectedRole() != UserRoleEnum.SuperAdmin && item.title!="E-commerce" &&  permissions.length > 0 && !(permissions.includes(item.title) || permissions.includes("list-"+ item.title)))
        //  {
        //     item.hidden = true;
        //  }

        this.localizationService.get(item.title).subscribe((text:string) => {
          item.title = text
      });


        if(item.children){
         const subMenuTranslated = item.children.map(u => ({ ...u, }));

         subMenuTranslated.forEach(subItem => {
          //-- check permissions
          // if(this.authService.getSelectedRole() != UserRoleEnum.SuperAdmin && permissions.length > 0 && !(permissions.includes(subItem.title) || permissions.includes("list-"+ subItem.title)))
          // {
          //    subItem.hidden = true;
          // }
            this.localizationService.get(subItem.title).subscribe((text:string) => {
              subItem.title = text
            });
          });

          item.children = subMenuTranslated;
        }

      });
      //  log.info(MENU_ITEMS);
      this.menu = menuTranslated;
     }


  }




// if (environment.production) {
//   Logger.enableProductionMode();
// }

//   if (environment.production) {
//      this.log.error(environment.serverUrl);
// }else{
//   this.log.debug(environment.serverUrl);

// }


export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true, //do not affect base route
  },

  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'lookups.lookups',
    icon: 'keypad-outline',
    children: [
      {
        title: 'lookups.ticket-categories',
        icon: 'list-outline',
        link: '/pages/ticket-categories',
      },
      {
        title: 'lookups.ticket-status',
        icon: 'list-outline',
        link: '/pages/ticket-status',
      },
      {
        title: 'lookups.insurance-types',
        icon: 'list-outline',
        link: '/pages/insurance-types',
      },
      {
        title: 'lookups.case-titles',
        icon: 'list-outline',
        link: '/pages/case-titles',
      },
      {
        title: 'lookups.cities',
        icon: 'list-outline',
        link: '/pages/cities',
      },
      {
        title: 'lookups.groups',
        icon: 'list-outline',
        link: '/pages/groups',
      },
      {
        title: 'lookups.case-origins',
        icon: 'list-outline',
        link: '/pages/case-origins',
      },
      {
        title: 'lookups.roles',
        icon: 'list-outline',
        link: '/pages/roles',
      },
      {
        title: 'lookups.departments',
        icon: 'list-outline',
        link: '/pages/departments',
      },
      {
        title: 'lookups.areas',
        icon: 'list-outline',
        link: '/pages/areas',
      },
      {
        title: 'lookups.policy-source',
        icon: 'list-outline',
        link: '/pages/policy-sources',
      },
      {
        title: 'lookups.final-decision',
        icon: 'list-outline',
        link: '/pages/final-decision',
      },
      {
        title: 'lookups.case-type',
        icon: 'list-outline',
        link: '/pages/case-type',
      },
      {
        title: 'lookups.sama-close-status',
        icon: 'list-outline',
        link: '/pages/sama-close-status',
      },
      {
        title: 'lookups.validity',
        icon: 'list-outline',
        link: '/pages/validity',
      },
      {
        title: 'lookups.caused-by-reason',
        icon: 'list-outline',
        link: '/pages/caused-by-reason',
      },
      {
        title: 'lookups.close-ticket-reason',
        icon: 'list-outline',
        link: '/pages/close-ticket-reason',
      }


    ],
  },
  {
    title: 'usermanagement.user-management',
    icon: 'keypad-outline',
    children:[
      {
        title: 'usermanagement.roles-management',
        icon: 'list-outline',
        link: '/pages/user-management/rolesmanagement',
      },
      {
        title: 'usermanagement.users',
        icon: 'list-outline',
        link: '/pages/user-management/users',
      },
      {
        title: 'usermanagement.calender',
        icon: 'calendar-outline',
        link: '/pages/user-management/calender',
      },

    ]
  },
  {
    title: 'tickets',
    icon: 'file-text-outline',
    children: [
      {
        title: 'list-tickets',
        icon: 'list-outline',
        // icon: 'grid-outline',
        link: '/pages/ticket/list',
      },
      {
        title: 'add-ticket',
        icon: 'file-add-outline',
        link: '/pages/ticket/add',
      },
    ],
  },








  {
    title: 'customers',
    icon: 'people-outline',
    children: [
      {
        title: 'list-customers',
        icon: 'list-outline',
        link: '/pages/customer/list',
      },

    ],
  },


];
