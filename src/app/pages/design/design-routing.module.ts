import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignComponent } from './design.component';
import { AddpostsComponent } from './addposts/addposts.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: DesignComponent,
    children: [
      {
        path: 'create',
        component: AddpostsComponent
      },
      {
        path: 'view',
        component: MainComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignRoutingModule {}
