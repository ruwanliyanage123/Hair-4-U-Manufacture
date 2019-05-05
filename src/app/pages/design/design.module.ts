import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignComponent } from './design.component';
import { DesignRoutingModule } from './design-routing.module';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [DesignComponent, CreateComponent, ViewComponent],
  imports: [CommonModule, DesignRoutingModule]
})
export class DesignModule {}
