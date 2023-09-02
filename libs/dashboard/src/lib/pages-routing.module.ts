import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { TreeviewModule } from '@treeview/ngx-treeview';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {

      path: 'home',
      component: HomeComponent,
    },
    // {
    //   path: 'ticket',
    //   loadChildren: () => import('./tickets/tickets.module')
    //     .then(m => m.TicketsModule),
    //     // canLoad:[]
    // },
    // {
    //   path: 'customer',
    //   loadChildren: () => import('./customer/customer.module')
    //     .then(m => m.CustomerModule),
    //     // canLoad:[]
    // },
    // {
    //   path: 'charts',
    //   loadChildren: () => import('./charts/charts.module')
    //     .then(m => m.ChartsModule),
    // },
    // {
    //   path: 'user-profile',
    //   loadChildren: () => import('./user-profile/user-profile.module')
    //     .then(m => m.UserProfileModule),
    // },
    // {
    //   path: 'user-management',
    //   loadChildren: () => import('./user-management/user-management.module')
    //     .then(m => m.UserManagementModule),
    //     // canLoad:[]
    // },
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TreeviewModule],
})
export class PagesRoutingModule {
}
