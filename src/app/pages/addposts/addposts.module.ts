import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddpostsComponent } from './addposts.component';
import { AddpostsRoutingModule } from './addposts-routing.module';

@NgModule({
  declarations: [AddpostsComponent],
  imports: [CommonModule, AddpostsRoutingModule]
})
export class AddpostsModule {}
