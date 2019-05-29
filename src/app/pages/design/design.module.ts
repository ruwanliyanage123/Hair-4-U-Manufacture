import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignComponent } from './design.component';
import { DesignRoutingModule } from './design-routing.module';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { AddpostsComponent } from './addposts/addposts.component';

@NgModule({
  declarations: [DesignComponent, AddpostsComponent],
  imports: [CommonModule, DesignRoutingModule]
})
export class DesignModule {}
