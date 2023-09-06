import { NgxEchartsModule } from 'ngx-echarts';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { NebularModule } from '@e-proc/nebular';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { TestComponent } from './components/test/test.component';
import * as echarts from 'echarts';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NbSidebarModule, NbMenuModule, NbDatepickerModule, NbTimepickerModule, NbDialogModule, NbWindowModule, NbToastrModule, NbChatModule, NbLayoutModule, NbThemeModule, NbActionsModule, NbContextMenuModule } from '@nebular/theme';
@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NebularModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbTimepickerModule.forRoot(),
    NbToastrModule.forRoot(),
    NgxEchartsModule.forRoot({ echarts }),
    TranslateModule.forRoot(),
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbTimepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TestComponent],
})
export class AppModule {}
