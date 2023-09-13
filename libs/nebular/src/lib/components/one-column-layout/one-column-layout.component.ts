import { Component, Input } from '@angular/core';
import { NbLayoutDirection } from '@nebular/theme';

@Component({
  selector: 'e-proc-one-column-layout',
  templateUrl: './one-column-layout.component.html',
  styleUrls: ['./one-column-layout.component.scss'],
})
export class OneColumnLayoutComponent {
  // isAuthenticated = true;
  @Input() isAuthenticated!: false;

}
