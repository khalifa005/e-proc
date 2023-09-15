import { AuthGuard } from '@e-proc/auth';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () =>
      import('../../../../libs/auth/src/lib/auth.module')
      .then((m) => m.AuthModule),
  },
  {
    path: 'service1',
    loadChildren: () =>
      import('service1/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
    canActivate:[AuthGuard]
  },
  {
    //this will group all the component into pages component in single view with the side menu par
    path: 'pages',
    loadChildren: () => import('../../../../libs/dashboard/src/lib/pages.module')
      .then(m => m.PagesModule),
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
