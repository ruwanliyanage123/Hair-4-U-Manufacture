import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SecureInnerPagesGuard } from './shared/guard/secure-inner-pages.guard';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const routes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  {
    path: 'sign-in',
    component: SignInComponent,
    canActivate: [SecureInnerPagesGuard]
  },
  {
    path: 'register-user',
    component: SignUpComponent,
    canActivate: [SecureInnerPagesGuard]
  },

  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [SecureInnerPagesGuard]
  },
  {
    path: 'verify-email-address',
    component: VerifyEmailComponent,
    canActivate: [SecureInnerPagesGuard]
  },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
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
