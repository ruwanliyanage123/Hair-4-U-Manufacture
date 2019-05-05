import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignComponent } from './design.component';
import { DesignRoutingModule } from './design-routing.module';
import { ViewModule } from './view/view.module';
import { CreateModule } from './create/create.module';

@NgModule({
  declarations: [DesignComponent],
  imports: [CommonModule, DesignRoutingModule, CreateModule, ViewModule]
})
export class DesignModule {}
