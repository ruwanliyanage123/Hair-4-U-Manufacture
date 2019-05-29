import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AddpostsComponent } from './addposts/addposts.component';
import { DesignComponent } from './design.component';

const routes: Routes = [
  { path: '', loadChildren: './main/main.module#MainModule' },
  { path: 'addpost', loadChildren: './addposts/addposts.module#AddpostsModule' }
];

//const routes: Routes = [
// {
//   path: '',
//   component: MainComponent,
//   children: [
//     {
//       path: 'addpost',
//       component: AddpostsComponent
//     }
//     // {
//     //   path: 'finished',
//     //   component: FinishedComponent
//     // }
//   ]
// }
//];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignRoutingModule {}
