import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NebularModule } from '@e-proc/nebular';
import { NbToastrModule } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { AuthModule, AuthService } from '@e-proc/auth';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    // AuthModule,
    NgxPermissionsModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('./remote-entry/entry.module').then(
              (m) => m.RemoteEntryModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),

    TranslateModule.forRoot(),
    // NbThemeModule.forRoot({ name: 'default' }),
  ],
  bootstrap: [AppComponent],

})
export class AppModule {}
