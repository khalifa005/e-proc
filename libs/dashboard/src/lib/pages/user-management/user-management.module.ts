import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { NbInputModule, NbCardModule, NbButtonModule, NbActionsModule, NbUserModule, NbCheckboxModule, NbRadioModule, NbDatepickerModule, NbSelectModule, NbIconModule, NbTabsetModule, NbListModule, NbChatModule, NbProgressBarModule, NbAlertModule, NbDialogModule, NbWindowModule, NbDialogRef, NbCalendarModule } from '@nebular/theme';


import { TranslateModule } from '@ngx-translate/core';
import { TableModule } from 'ngx-easy-table';
// import { RolesManagementComponent } from './roles-management/roles-management.component';
import { TreeviewModule } from '@treeview/ngx-treeview';
import { NgxPermissionsGuard, NgxPermissionsModule } from 'ngx-permissions';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { NebularModule } from '@e-proc/nebular';
import { RolesManagementComponent } from './roles-management/roles-management.component';

@NgModule({
  imports: [
    CommonModule,
    NebularModule,
    UserManagementRoutingModule,
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
    NbTabsetModule,
    NbListModule,
    NbChatModule,
    NbProgressBarModule,
    NbAlertModule,
    FormsModule,
    NgxPermissionsModule,
    NbDialogModule.forChild(),
    ReactiveFormsModule,
    TreeviewModule.forRoot(),
    NbCalendarModule,
    NgxPermissionsModule
  ],
  declarations: [
     UserManagementComponent,
     RolesManagementComponent,


  ]
})
export class UserManagementModule { }
