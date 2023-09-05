import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'e-proc-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {


  constructor(protected ref: NbDialogRef<NotFoundComponent>){

  }
 cancel() {
    this.ref.close();
  }
}
