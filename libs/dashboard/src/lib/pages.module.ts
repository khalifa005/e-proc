import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NebularModule } from '@e-proc/nebular';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule, I18nService } from '@e-proc/core';
import { NbCardModule } from '@nebular/theme';

const COMPONENTS = [
  PagesComponent,
  HomeComponent,
  NotFoundComponent,
];


@NgModule({
  imports: [
    TranslateModule,
     CommonModule,
     CoreModule,
     NbCardModule,
     NebularModule,
     PagesRoutingModule,
    ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS ],
})
export class PagesModule {}
