import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  exports: [MainComponent]
})
export class MainModule {}
