import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent
} from '@nebular/auth';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  {
    path: 'signup',
    component: SignUpComponent
  },

  // {
  //   path: 'auth',
  //   component: NbAuthComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: NbLoginComponent
  //     },
  //     {
  //       path: 'login',
  //       component: NbLoginComponent
  //     },
  //     {
  //       path: 'register',
  //       component: NbRegisterComponent
  //     },
  //     {
  //       path: 'logout',
  //       component: NbLogoutComponent
  //     },
  //     {
  //       path: 'request-password',
  //       component: NbRequestPasswordComponent
  //     },
  //     {
  //       path: 'reset-password',
  //       component: NbResetPasswordComponent
  //     }
  //   ]
  // },

  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: '**', redirectTo: 'signup' }
];

const config: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
