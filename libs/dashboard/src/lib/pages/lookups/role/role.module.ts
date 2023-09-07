import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NbInputModule, NbCardModule, NbButtonModule, NbActionsModule, NbUserModule, NbCheckboxModule, NbRadioModule, NbDatepickerModule, NbSelectModule, NbIconModule, NbTabsetModule, NbListModule, NbChatModule, NbProgressBarModule, NbAlertModule, NbDialogModule, NbWindowModule, NbAccordionModule, NbPopoverModule, NbRouteTabsetModule, NbStepperModule, NbTooltipModule, NbLayoutModule } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { TableModule } from 'ngx-easy-table';
import { RoleFormComponent } from './form/role-form.component';
import { NebularModule } from '@e-proc/nebular';
import { CoreModule } from '@e-proc/core';
import { PagesModule } from '../../../pages.module';
import { NgxPermissionsModule } from 'ngx-permissions';
const routes: Routes = [{
  path: '',
  component: RoleComponent,

  children: [
    {
    path: 'list',
    component: RoleComponent,
    }
],
}];
@NgModule({
  imports: [
    NebularModule,
    CoreModule,
    CommonModule,
    NbLayoutModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    TranslateModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    TableModule,
    FormsModule,
    NbRouteTabsetModule,
    NbTabsetModule,
    NbListModule,
    NbChatModule,
    NbProgressBarModule,
    NbAlertModule,
    // NgxPermissionsModule
    NgxPermissionsModule

  ],
  declarations: [RoleComponent, RoleFormComponent]
})
export class RoleModule { }
