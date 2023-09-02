/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { I18nService, Logger, environment } from "@e-proc/core";
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";
import { NgxPermissionsService } from "ngx-permissions";
import { MENU_ITEMS } from "./pages-menu";
import { NbMenuItem } from "@nebular/theme";


@Component({
  selector: 'e-proc-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <router-outlet></router-outlet>
  `,
})
//implements OnInit
export class PagesComponent implements OnInit, OnDestroy {
  private log = new Logger(PagesComponent.name);

//here is the main page that will still appear in all the app
menu!: NbMenuItem[];

enableSide:boolean= true;

// @ViewChild('menuItems')menuItemsRef!:NbMenuComponent;

  constructor()
    {
        // this.sideMenuTranslationInt();
    }

    ngOnInit(): void {}


   ngOnDestroy() {
    // this.i18nService.destroy();
  }

}


