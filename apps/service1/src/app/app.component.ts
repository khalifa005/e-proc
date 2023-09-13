import { Logger } from '@e-proc/core';
import { AuthService } from '@e-proc/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'e-proc-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  private log = new Logger("servive 1");

  // constructor(
  //   private authService: AuthService)
  //   {

  //   }

    ngOnInit(): void {

      this.trackAuthentication();

    }

    trackAuthentication() {
      this.log.info("trackAuthentication");
        // const isAuthenticated = this.authService.isLoggedIn();
        // this.log.info(isAuthenticated);
    }
}
