import { NgxPermissionsGuard } from 'ngx-permissions';
import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '', component: RemoteEntryComponent,
    // canActivate: [NgxPermissionsGuard],
    // data: {
    //   permissions: {
    //     only: ['SuperAdmin'],
    //   }
    // }
   },
];
