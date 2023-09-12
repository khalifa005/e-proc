import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { TreeviewModule } from '@treeview/ngx-treeview';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AuthGuard } from '@e-proc/auth';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./pages/layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./pages/modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./pages/maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./pages/charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./pages/extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'roles',
      loadChildren: () => import('./pages/lookups/role/role.module')
        .then(m => m.RoleModule),
        // canLoad:[]
    },
    {
      path: 'user-management',
      loadChildren: () => import('./pages/user-management/user-management.module')
        .then(m => m.UserManagementModule),
        // canLoad:[]
    },
    {
      //this will affect the first page once the app is loaded for the first time because it's not having any URL
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
  // canActivate:[AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes), NgxPermissionsModule.forChild()],
  exports: [RouterModule, TreeviewModule, NgxPermissionsModule],
})
export class PagesRoutingModule {
}
