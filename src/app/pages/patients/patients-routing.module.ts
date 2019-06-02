import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsComponent } from './patients.component';
import { FinishedComponent } from './finished/finished.component';
import { WigsComponent } from './wigs/wigs.component';
import { MeasuresComponent } from './measures/measures.component';

const routes: Routes = [
  {
    path: '',
    component: PatientsComponent,
    children: [
      {
        path: 'order',
        component: WigsComponent
      },
      {
        path: 'finished',
        component: FinishedComponent
      },
      {
        path: 'measures',
        component: MeasuresComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule {}
