import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { UserManagementComponent } from './user-management.component';
import { RolesManagementComponent } from './roles-management/roles-management.component';



const routes: Routes = [{
  path: '',
  component: UserManagementComponent,
  canActivate: [NgxPermissionsGuard],
  data: {
    permissions: {
      only: ['SuperAdmin'],
    }
  },
  children: [
    {
      path: 'rolesmanagement',
      component: RolesManagementComponent,
    },
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagementRoutingModule { }
