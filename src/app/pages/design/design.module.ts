import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignComponent } from './design.component';
import { DesignRoutingModule } from './design-routing.module';

@NgModule({
  declarations: [DesignComponent],
  imports: [CommonModule, DesignRoutingModule]
})
export class DesignModule {}
