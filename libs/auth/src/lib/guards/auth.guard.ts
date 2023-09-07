import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from '../services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Logger, loadPermissions } from "@e-proc/core";
import { ToastNotificationService } from "@e-proc/nebular";

const log = new Logger("Guard");

@Injectable({ providedIn: 'root' })


export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,
    private router: Router,
    public translate: TranslateService,
    private toastNotification: ToastNotificationService,
    private permissionsService: NgxPermissionsService
    ) {

  }

  canActivate(): boolean {

    if (this.auth.isLoggedIn()) {

      //-- Load USER Permissions for the current Role To overcome Refresh Problem
      loadPermissions(this.permissionsService,this.auth.getRolePermissions(this.auth.getSelectedRole()));
      return true;
    }
    else {
      this.router.navigateByUrl('/auth/login').then(() => {
         //let title = this.translate.instant('error');
         //this.toastNotification.showError('error', 'UnAuthorized Access, Please Login first');
      });

      return false;
    }
  }

}
