import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [HeaderComponent],
  imports: [ButtonModule],
  exports: [HeaderComponent, ButtonModule],
})
export class SharedModule {}
