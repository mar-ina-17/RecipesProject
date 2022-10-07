import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [HeaderComponent],
  imports: [ButtonModule, MenubarModule],
  exports: [HeaderComponent, ButtonModule, MenubarModule],
})
export class SharedModule {}
