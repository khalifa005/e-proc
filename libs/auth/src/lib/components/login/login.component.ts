/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { Logger, ApiResponse, loadPermissions, NotitficationsDefaultValues } from "@e-proc/core";
import { ToastNotificationService } from "@e-proc/nebular";
import { NbLayoutDirection, NbLayoutDirectionService } from "@nebular/theme";
import { TranslateService } from "@ngx-translate/core";
import { NgxPermissionsService } from "ngx-permissions";
import { AuthService } from "../../services/auth.service";
import { UserStoreService } from "../../services/user-store.service";
import { LoginForm } from "../forms/login.form";
import { LoginDto } from "../../models/login.model";
import { AuthenticateDto } from "../../models/Authenticate.model";

const log = new Logger('App');
@Component({
  selector: 'e-proc-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  private log = new Logger(LoginComponent.name);
  loginDTO: LoginDto = {
    Username: "",
    Password: "",
  };

  loadingSpinner : boolean = false;
  isDisablebutton: boolean = false;
  directions = NbLayoutDirection;
  loginForm!: LoginForm;

  constructor(private directionService: NbLayoutDirectionService,
    public translate: TranslateService,
    public fb: FormBuilder,
    private router: Router,
    private toastNotificationService: ToastNotificationService,
    private authService: AuthService,
    private userStoreService : UserStoreService,
    private permissionsService: NgxPermissionsService,
  ) {
    if (this.translate.currentLang === "ar-SA") {
      this.directionService.setDirection(this.directions.RTL);
    }

  }


  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit() {
    this.loginForm = new LoginForm(this.loginDTO);
    log.info("Login Is working");
  }

  onSubmit() {
    if (this.loginForm.valid) {
      //Logic for valid form
      console.log(this.loginForm);
      this.isDisablebutton = true;
      this.loadingSpinner = true;
      //--Send Object

      // let loggedUserName = this.loginForm.username.value;
      const loginDTo = this.mapFormToLoginDto(this.loginForm);
      this.authService.login(loginDTo)
        .subscribe({
          next: ((response : ApiResponse<AuthenticateDto>) => {
            if(response.StatusCode === 200 && response.Data && response.Data.UserRoles[0])
            {
              if(response.Data!.NeedVerification){
                localStorage.setItem('newRegisterId', `${response.Data?.Id}`);
                this.router.navigateByUrl("/auth/otpVerification");
              }
              else
              {
                this.authService.storeToken(response.Data.AccessToken);
                this.authService.InitPayload();
                const userFullName = this.authService.getUserNameFromToken();
                this.authService.userRoles = response.Data.UserRoles;
                //-- SET Permission for User With every Role
                this.authService.setRolePermissions(response.Data.UserRoles);

                //-- SET Default Role & Load Permission of This Role
                this.authService.setSelectedRole(response.Data.UserRoles[0].RoleId);

                let allRoleFunctions:string[] = [];

                response.Data.UserRoles.forEach(x=> {
                  // Array.apply()
                  allRoleFunctions.concat(...x.RoleFunctions) ;
                });
                loadPermissions(this.permissionsService,response.Data.UserRoles[0].RoleFunctions ?? []);
                this.userStoreService.setFullNameForStore(userFullName ?? "empty-username");

                // loadPermissions(this.permissionsService,allRoleFunctions ?? []);

                this.loginForm.reset();
                this.router.navigateByUrl("/").then(nav => {
                  const body = this.translate.instant('welcomeMessage', { firstName: userFullName});
                  const title = this.translate.instant('success');
                  this.toastNotificationService.showNotificationWithCustomIcon(NotitficationsDefaultValues.Success, 'email-outline', title, body);
                });
              }
            }
            else
            {
               this.isDisablebutton = false;
               this.loadingSpinner = false;
               const title = this.translate.instant('error');
               this.toastNotificationService.showToast(NotitficationsDefaultValues.Danger, title, response.ErrorMessage?? "");
            }
          }),
          error: (err => {
            const title = this.translate.instant('error');
            this.isDisablebutton = false;
            this.loadingSpinner = false;
            this.log.info(err?.error?.ErrorMessage);
            this.toastNotificationService.showError(title, err?.error?.ErrorMessage);
          })
        })

    } else {
      this.isDisablebutton = false;
      this.loadingSpinner = false;
      this.loginForm.markAllAsTouched()
      const validationErrors = this.loginForm.errors;
      const errorMessage = this.translate.instant('login.invalid-user-info');
      const title = this.translate.instant('error');
      this.toastNotificationService.showError(title, errorMessage);
    };
  }

  private mapFormToLoginDto(form: LoginForm): LoginDto {
    return {
      ...form.value,
      // orders: this.mapOrders(form.Orders)
    } as LoginDto;
  }

}
