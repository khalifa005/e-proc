import { Logger, loadPermissions } from '@e-proc/core';
import { AuthService } from '@e-proc/auth';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { NgxPermissionsService } from 'ngx-permissions';
@Component({
  selector: 'e-proc-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  private log = new Logger("servive 1");

  constructor(
    private authService: AuthService,
    private router: Router,
    private permissionsService: NgxPermissionsService,
    @Inject(DOCUMENT) private document: Document
     )
    {
      // this.trackAuthentication();
    }

    ngOnInit(): void {

      this.trackAuthentication();

    }

    trackAuthentication() {
      this.log.info("trackAuthentication");
        const isAuthenticated = this.authService.isLoggedIn();
        this.log.info(isAuthenticated);

        if(!isAuthenticated){
          this.goToUrl();
          const permissions = this.authService.getRolePermissions(1);
          loadPermissions(this.permissionsService, permissions);
          // this.authService.lo
        }
    }

    goToUrl(): void {
      // this.document.location.href = 'http://localhost:4200/auth/login';
  }
}
