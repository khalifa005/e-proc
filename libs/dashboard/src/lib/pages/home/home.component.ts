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
  constructor(private dialogService: NbDialogService,
    private toastNotificationService: ToastNotificationService,
    private windowService: NbWindowService) {
  }

  open(dialog: TemplateRef<any>) {
    this.toastNotificationService.showNotificationWithCustomIcon(NotitficationsDefaultValues.Success, 'checkmark-circle-2-outline', "title", "body");
    this.dialogService.open(dialog, { context: 'this is some additional data passed to dialog' });
  }


// TODO static must be false as of Angular 9.0.0
@ViewChild('contentTemplate') contentTemplate: TemplateRef<any>;

openWindow() {
  this.windowService.open(
    this.contentTemplate,
    { title: 'Window content from template', context: { text: 'some text to pass into template' } },
  );
}

opens() {
  this.dialogService.open(NotFoundComponent, {
    context: {
    },
  });
}

}
