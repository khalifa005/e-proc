import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbThemeModule,
  NbLayoutDirection,
  DEFAULT_MEDIA_BREAKPOINTS,
  NbPopoverModule,
  NbProgressBarModule,
  NbInputModule,
  NbDatepickerModule,
  NbDialogModule,
  NbTimepickerModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { OneColumnLayoutComponent } from './components/one-column-layout/one-column-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { CoreModule, LayoutService, StateService } from '@e-proc/core';
import { LayoutDirectionSwitcherComponent } from './components/layout-direction-switcher/layout-direction-switcher.component';
import { SwitcherComponent } from './components/switcher/switcher.component';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const NB_MODULES = [
  TranslateModule,


  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbEvaIconsModule,
  NbPopoverModule,
  NbProgressBarModule,
  NbInputModule,
  NbDatepickerModule,
  ReactiveFormsModule,
  FormsModule,

  NbThemeModule.forRoot({ name: 'default' }),

  NbSidebarModule.forRoot(),
  NbMenuModule.forRoot(),
  NbDatepickerModule.forRoot(),

  NbTimepickerModule.forRoot(),
  NbDialogModule.forRoot(),
  NbWindowModule.forRoot(),
  NbToastrModule.forRoot(),
  NbLayoutModule,
];

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  OneColumnLayoutComponent,
  SwitcherComponent,
  LayoutDirectionSwitcherComponent,
];

export const NB_CORE_PROVIDERS = [LayoutService,  StateService];

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CoreModule,
    ...NB_MODULES,
    NbThemeModule.forRoot(),
  ],
  exports: [
    ...COMPONENTS,
    CommonModule,
    NbLayoutModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbSidebarModule,
    NbContextMenuModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbEvaIconsModule,
    NbPopoverModule,
    NbProgressBarModule,
    NbInputModule,
    NbDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    // ...NB_MODULES,
  ],
  declarations: [
    ...COMPONENTS
  ],
  providers: [...NB_CORE_PROVIDERS],
})
export class NebularModule {}
