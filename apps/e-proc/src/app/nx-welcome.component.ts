import { LayoutService } from '@e-proc/core';
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NbSidebarService, NbMenuService, NbThemeService, NbLayoutDirectionService, NbMediaBreakpointsService, NbLayoutDirection } from '@nebular/theme';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'e-proc-nx-welcome',
  template: `
     <nb-layout windowMode>
      <nb-layout-header fixed>

      <div class="header-container">
  <div class="logo-container">
    <a  (click)="toggleSidebar()" href="#" class="sidebar-toggle">
      <nb-icon icon="menu-2-outline"></nb-icon>
    </a>
    <a class="logo">
      <img src="assets/logo.png" alt="" height="60 px" width="210"> </a>
  </div>


</div>

<div class="header-container">
  <nb-actions size="small">

    <nb-action class="control-item">
      <!-- <nb-search type="rotate-layout"></nb-search> -->
      <!-- <ngx-layout-direction-switcher (change)="onDirectionSwitch()" class="control-item direction-switcher"></ngx-layout-direction-switcher> -->

    </nb-action>



    <nb-action
    *ngIf="isAuthenticated"
    class="control-item"
    icon="bell-outline"></nb-action>

    <nb-action
    *ngIf="isAuthenticated"
      class="user-action" >
      <nb-user [nbContextMenu]="userMenu"
               [onlyPicture]="userPictureOnly"
               [name]="userFullName"
               picture="assets/images/logo.png">
      </nb-user>
    </nb-action>
  </nb-actions>
</div>


      </nb-layout-header>

      <nb-sidebar  class="menu-sidebar" tag="menu-sidebar" responsive start>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
      <span class="created-by">
      @Copyright  <b><a href="https://github.com/khalifa005/khalifa-angular-template" target="_blank">ACIG</a></b> 2023
    </span>
    <div class="socials">
      <a href="https://github.com/khalifa005" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.facebook.com/medoo.kh.9/" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.linkedin.com/in/mahmoud-khalifa-643936138/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
      </nb-layout-footer>
    </nb-layout>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  userFullName : string = "";
  @Input() isAuthenticated!: true;
  currentRole = -1;


  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  supportedLanguages!: string[];
  directions = NbLayoutDirection;
  currentDirection: NbLayoutDirection = NbLayoutDirection.LTR;
  currentTheme = 'default';
  defaultLang: any;


  userMenu = [ { title: 'Profile', link: '/pages/user-profile'   }, { title: 'Log out', link: '/auth/logout'  } ];


  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private router: Router,
    private themeService: NbThemeService,
    private directionService: NbLayoutDirectionService,
    private breakpointService: NbMediaBreakpointsService) {

      this.directionService.onDirectionChange()
      .pipe(takeUntil(this.destroy$))
      .subscribe(newDirection => this.currentDirection = newDirection);

}
  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    // this.layoutService.changeLayoutSize();

    return false;
  }
  onDirectionSwitch() : void{
    location.reload();
  }
}
