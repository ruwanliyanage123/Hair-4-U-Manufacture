import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: SignUpComponent

    //   children: [{
    //     path: 'echarts',
    //     component: EchartsComponent,
    //   }, {
    //     path: 'd3',
    //     component: D3Component,
    //   }, {
    //     path: 'chartjs',
    //     component: ChartjsComponent,
    //   }],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule {}

export const routedComponents = [];
