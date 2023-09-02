import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestAuthComponent } from './components/test-auth/test-auth.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [{
  path: '',
  component: TestAuthComponent,
}];

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(routes),
    TranslateModule],
  declarations: [ TestAuthComponent],
  exports: [TestAuthComponent],
})
export class AuthModule {}
