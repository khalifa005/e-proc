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
@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    NebularModule,
    NgxEchartsModule.forRoot({ echarts }),
    TranslateModule.forRoot(),
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TestComponent],
})
export class AppModule {}
