import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'e-proc-nx-welcome',
  template: `
     <nb-layout>
      <nb-layout-header fixed>Company Name</nb-layout-header>

      <nb-sidebar>Sidebar Content</nb-sidebar>

      <nb-layout-column>
        Page Content <button nbButton>Hello World</button>
      </nb-layout-column>
    </nb-layout>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
