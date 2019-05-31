import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SecureInnerPagesGuard } from './shared/guard/secure-inner-pages.guard';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'signin',
    component: SignInComponent,
    canActivate: [SecureInnerPagesGuard]
  },

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
