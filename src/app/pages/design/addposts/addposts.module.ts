import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddpostsComponent } from './addposts.component';
//need to import ReactiveForms module here too
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddpostsComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class AddpostsModule {}
