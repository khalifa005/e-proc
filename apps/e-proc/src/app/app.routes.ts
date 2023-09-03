import { Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';

export const routes: Routes = [
  {
  path: '',
  component: TestComponent,
  }
  // ,{
  // path: 'auth',
  // loadChildren: () => import('../../../../libs/auth/src/lib/auth.module')
  //     .then(m => m.AuthModule),
  // }
  ,{
    //this will group all the component into pages component in single view with the side menu par
    path: 'pages',
    loadChildren: () => import('../../../../libs/dashboard/src/lib/pages.module')
      .then(m => m.PagesModule),
  }
  //,
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./@auth/auth.module')
  //     .then(m => m.NgxAuthModule),
  // },
  ,{ path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
