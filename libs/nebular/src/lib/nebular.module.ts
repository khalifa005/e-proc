import { LayoutService } from './../../../../apps/e-proc/src/app/layout.service';
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

const NB_MODULES = [
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

export const NB_CORE_PROVIDERS = [
  LayoutService,
];

// const COMPONENTS = [
//   HeaderComponent,
//   // FooterComponent,
// ];

@NgModule({
  imports: [
    CommonModule,
    ...NB_MODULES,
    NbThemeModule.forRoot()
  ],
  exports: [
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
    // ...NB_MODULES
  ],
  declarations: [],
  providers: [
    ...NB_CORE_PROVIDERS,
  ],
})
export class NebularModule {}
