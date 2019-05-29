import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignComponent } from './design.component';
import { DesignRoutingModule } from './design-routing.module';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { AddpostsComponent } from './addposts/addposts.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [DesignComponent, AddpostsComponent, MainComponent],
  imports: [CommonModule, DesignRoutingModule]
})
export class DesignModule {}
