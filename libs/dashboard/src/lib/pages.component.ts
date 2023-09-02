/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router";
import { Logger } from "@e-proc/core";
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";
import { NgxPermissionsService } from "ngx-permissions";
import { MENU_ITEMS } from "./pages-menu";
import { NbMenuItem } from "@nebular/theme";


@Component({
  selector: 'e-proc-pages',
  styleUrls: ['pages.component.scss'],
  template: `
   <e-proc-one-column-layout>
  <nb-menu  #menuItems  [items]="menu"></nb-menu>
  <router-outlet></router-outlet>
</e-proc-one-column-layout>
  `,
})
//implements OnInit
export class PagesComponent implements OnInit {
  private log = new Logger(PagesComponent.name);

//here is the main page that will still appear in all the app
menu!: NbMenuItem[];

enableSide:boolean= true;

// @ViewChild('menuItems')menuItemsRef!:NbMenuComponent;

  constructor(
    public localizationService: TranslateService,
    private changeDetectorRef: ChangeDetectorRef,
    private permissionsService: NgxPermissionsService,
    private router: Router)
    {
        this.sideMenuTranslationInt();
    }

    ngOnInit(): void {

      this.localizationService.onLangChange.subscribe((event: LangChangeEvent) => {
        this.sideMenuTranslationInt();

       });


  }

  sideMenuTranslationInt(){
    const menuTranslated = MENU_ITEMS.map(u => ({ ...u, }));

    menuTranslated.forEach(item => {

      this.localizationService.get(item.title).subscribe((text:string) => {
        item.title = text
    });


      if(item.children){
       const subMenuTranslated = item.children.map(u => ({ ...u, }));

       subMenuTranslated.forEach(subItem => {

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


