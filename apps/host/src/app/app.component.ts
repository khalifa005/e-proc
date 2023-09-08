import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Logger, I18nService, environment } from '@e-proc/core';
import { NbMenuItem } from '@nebular/theme';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { MENU_ITEMS } from './app-side-menu';

@Component({
  selector: 'e-proc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    private log = new Logger(AppComponent.name);
    title = 'host';

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

        }

        ngOnInit(): void {
          this.i18nService.init("en-US", ['en-US', 'ar-SA']);
          this.sideMenuTranslationInt();
          if (environment.production) {
          Logger.enableProductionMode();
          }

          if (environment.production) {
          this.log.error("environment.production");
          this.log.error(environment.apiBaseUrl);
          }else{
          this.log.debug("server local");
          this.log.debug(environment.apiBaseUrl);

          }


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

       ngOnDestroy() {
        this.i18nService.destroy();
    // if (this.subForSubject) this.subForSubject.unsubscribe();
      }
    }

