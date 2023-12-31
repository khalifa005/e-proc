import { ModuleWithProviders, NgModule } from '@angular/core';
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
  NbPopoverModule,
  NbProgressBarModule,
  NbInputModule,
  NbDatepickerModule,
  NbTimepickerModule,
  NbToastrModule,
  NbSpinnerModule,
} from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { OneColumnLayoutComponent } from './components/one-column-layout/one-column-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { CoreModule } from '@e-proc/core';
import { LayoutDirectionSwitcherComponent } from './components/layout-direction-switcher/layout-direction-switcher.component';
import { SwitcherComponent } from './components/switcher/switcher.component';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './components/footer/footer.component';
import { CustomInputComponent } from './components/inputs/custom-input/custom-input.component';
import { CustomTextareaComponent } from './components/inputs/custom-textarea/custom-textarea.component';
import { LayoutService } from './services/layout.service';
import { StateService } from './services/state.service';
import { ToastNotificationService } from './services/toast-notification.service';
import {
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
  TranslatorPipe,
} from './pipes';
import { ErrorKeysPipe } from './pipes/errorKeys.pipe';
import { YesNoPipe } from './pipes/yes-no.pipe';
import { RouterModule } from '@angular/router';
import { YesNoDropdownComponent } from './components/dropdowns/yes-no-dropdown/yes-no-dropdown.component';
import { BooleanDropdownComponent } from './components/dropdowns/boolean-dropdown/boolean-dropdown.component';
import { DragFileUploaderComponent } from './components/drag-file-uploader/drag-file-uploader.component';
import { RoleDropdownComponent } from './components/dropdowns/role-dropdown/role-dropdown.component';

const NB_MODULES = [
  TranslateModule,
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
  NbSpinnerModule,
  NbLayoutModule,
];

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  OneColumnLayoutComponent,
  SwitcherComponent,
  LayoutDirectionSwitcherComponent,
  CustomInputComponent,
  CustomTextareaComponent,
  YesNoDropdownComponent,
  BooleanDropdownComponent,
  DragFileUploaderComponent,
  RoleDropdownComponent,
];

const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
  TranslatorPipe,
  YesNoPipe,
];

export const NB_CORE_PROVIDERS = [LayoutService, StateService];

@NgModule({
  imports: [CommonModule, RouterModule, CoreModule, ...NB_MODULES],
  exports: [
    CommonModule,
    ...COMPONENTS,
    ...NB_MODULES,
    ...PIPES,
  ],
  declarations: [...COMPONENTS, ...PIPES],
  providers: [...NB_CORE_PROVIDERS],
})
export class NebularModule {}
