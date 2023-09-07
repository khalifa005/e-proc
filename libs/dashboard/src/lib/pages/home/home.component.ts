/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NbDialogService, NbWindowService } from '@nebular/theme';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ToastNotificationService } from '@e-proc/nebular';
import { NotitficationsDefaultValues } from '@e-proc/core';
import { AuthService } from '@e-proc/auth';

@Component({
  selector: 'e-proc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedItem = '2';

  constructor(private dialogService: NbDialogService,
    private toastNotificationService: ToastNotificationService,
    private authService: AuthService,
    private windowService: NbWindowService) {
  }
  ngOnInit(): void {

    this.authService.fakeLogin();
  }


}
