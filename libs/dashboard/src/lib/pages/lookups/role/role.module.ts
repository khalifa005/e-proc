import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NbCardModule } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { TableModule } from 'ngx-easy-table';
import { RoleFormComponent } from './form/role-form.component';
import { NebularModule } from '@e-proc/nebular';
import { CoreModule } from '@e-proc/core';
import { NgxPermissionsGuard, NgxPermissionsModule } from 'ngx-permissions';
const routes: Routes = [{
  path: '',
  component: RoleComponent,
  canActivate: [NgxPermissionsGuard],
  data: {
    permissions: {
      only: ['SuperAdmin','roles'],
    }
  },
  children: [
    {
    path: 'list',
    component: RoleComponent,
    }
],
}];
@NgModule({
  imports: [
    NebularModule,
    CoreModule,
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    TranslateModule,
    NbCardModule,
    TableModule,
    FormsModule,
    NgxPermissionsModule

  ],
  declarations: [RoleComponent, RoleFormComponent]
})
export class RoleModule { }
