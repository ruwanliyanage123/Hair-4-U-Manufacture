import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddpostsComponent } from './addposts.component';
//need to import ReactiveForms module here too
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddpostsComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [AddpostsComponent]
})
export class AddpostsModule {}
