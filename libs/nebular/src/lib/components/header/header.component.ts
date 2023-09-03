/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbLayoutDirection, NbLayoutDirectionService, NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Logger, I18nService } from '@e-proc/core';
import { LayoutService } from '../../services/layout.service';


@Component({
  selector: 'e-proc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private log = new Logger(HeaderComponent.name);
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  userFullName : string = "khalifaa";
  @Input()
  isAuthenticated: boolean = true;
  // userRoles  : UserRole[];
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
  currentDirection!: NbLayoutDirection;
  currentTheme = 'default';
  defaultLang ="ar-SA";
  userPicture : string = "/assets/logo.png";
  logoPicture : string = "/assets/amana-logo.ico";


  userMenu = [ { title: 'Profile', link: '/pages/user-profile'   }, { title: 'Log out', link: '/auth/logout'  } ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private router: Router,
              private themeService: NbThemeService,
              private layoutService: LayoutService,
              private i18nService: I18nService,
              private directionService: NbLayoutDirectionService,
              private breakpointService: NbMediaBreakpointsService) {

    this.directionService.onDirectionChange()
    .pipe(takeUntil(this.destroy$))
    .subscribe(newDirection => this.currentDirection = newDirection);

    if( this.i18nService.language === "ar-SA"){
      this.directionService.setDirection(this.directions.RTL);
    }
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;
    this.defaultLang = this.i18nService.language;
    this.supportedLanguages = this.i18nService.supportedLanguages;
    this.log.info(this.defaultLang);
    this.log.info(this.supportedLanguages);
    this.log.info("khalifaa");
    // this.authService.InitPayload();
    // this.userRoles = this.authService.userRoles;
    // this.currentRole = this.authService.getSelectedRole();

  //    this.userStoreService.getFullNameFromStore()
  //    .subscribe(val=>{

  //       let userInfo = this.authService.getUserInfoFromToken();
  //       let fullNameFromToken =  "";
  //       if(userInfo != undefined){
  //         fullNameFromToken = userInfo?.FirstName +" "+ userInfo?.LastName;
  //         this.userRoles = userInfo.userRoleInfo;
  //         this.currentRole = this.authService.getSelectedRole();
  //       }
  //       this.userFullName = val || fullNameFromToken;
  //    },
  //    (erorr) => {
  //     let userInfo = this.authService.getUserInfoFromToken();
  //     let fullNameFromToken = "";
  //     if(userInfo != undefined){
  //       fullNameFromToken = userInfo?.FirstName +" "+ userInfo?.LastName;
  //       this.userRoles = userInfo.userRoleInfo;
  //       this.currentRole = this.authService.getSelectedRole();
  //     }

  //          this.userFullName = fullNameFromToken;

  //  })


    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  toggleDirection(newDirection: NbLayoutDirection) {
    this.directionService.setDirection(newDirection);
//keep this as it will change the lang
    if(newDirection == "rtl"){
      this.i18nService.language = 'ar-SA';
    }else{
      this.i18nService.language = 'en-US';
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: any) {
    this.themeService.changeTheme(themeName);
  }

  changeRole(roleId : number) {
    this.currentRole = roleId;
     //-- SET Default Role & filter Permission of selected Role
    // this.authService.setSelectedRole(roleId);
    // var permissions = this.authService.getRolePermissions(roleId);

    //--- Load Permisssion of selected Role
    // loadPermissions(this.permissionsService, permissions);
    this.router.navigateByUrl("/");
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    // this.layoutService.changeLayoutSize();

    return false;
  }

  onDirectionSwitch() : void{
    // location.reload();
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
