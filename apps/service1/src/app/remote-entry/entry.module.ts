import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AuthService } from '@e-proc/auth';
@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent],
  imports: [
    CommonModule,
    // NgxPermissionsModule.forChild(),
    RouterModule.forChild(remoteRoutes)],
    providers: [AuthService],

  // exports:[NgxPermissionsModule]
})
export class RemoteEntryModule {}
