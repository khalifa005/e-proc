/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NbDialogService, NbWindowService } from '@nebular/theme';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ToastNotificationService } from '@e-proc/nebular';
import { NotitficationsDefaultValues } from '@e-proc/core';

@Component({
  selector: 'e-proc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  selectedItem = '2';

  constructor(private dialogService: NbDialogService,
    private toastNotificationService: ToastNotificationService,
    private windowService: NbWindowService) {
  }


}
