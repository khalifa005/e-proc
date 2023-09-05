import { Component } from '@angular/core';
import { ToastNotificationService } from '@e-proc/nebular';
import {
  NbComponentStatus,
  NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
  NbToastrConfig,
} from '@nebular/theme';

@Component({
  selector: 'e-proc-toastr',
  styleUrls: ['./toastr.component.scss'],
  templateUrl: './toastr.component.html',
})
export class ToastrComponent {
  constructor(private toastrService: ToastNotificationService) {}

  openRandomToast () {
    this.toastrService.openRandomToast();
   }
}
