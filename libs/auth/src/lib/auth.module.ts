import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestAuthComponent } from './components/test-auth/test-auth.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NebularModule } from '@e-proc/nebular';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NbLayoutModule, NbCardModule, NbButtonModule, NbCheckboxModule, NbInputModule, NbActionsModule, NbUserModule, NbRadioModule, NbDatepickerModule, NbSelectModule, NbIconModule, NbSpinnerModule } from '@nebular/theme';
import { NgxPatternModule } from 'ngx-pattern';
import { AuthComponent } from './auth.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';

const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'logout',
      component: LogoutComponent,
    },
  ],
  // canActivate:[AuthGuard]
}];

@NgModule({
  imports: [
    CommonModule,
    NebularModule,
    TranslateModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    NbCheckboxModule,
    ReactiveFormsModule,
    NbInputModule,
    NbCardModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    RouterModule,
    NgxPatternModule,
    NbSpinnerModule
  ],
  declarations: [ TestAuthComponent, LoginComponent, AuthComponent],
  exports: [TestAuthComponent, LoginComponent,AuthComponent, RouterModule,
    TranslateModule,
  ],
})
export class AuthModule {}
