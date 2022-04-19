import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/guards/auth.guard';
import { NoAuthGuard } from './core/auth/guards/noAuth.guard';
import { AngularFireAuthGuard, hasCustomClaim, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['sign-in']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['tabs/home']);
// const belongsToAccount = (next) => hasCustomClaim(`account-${next.params.id}`);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    canActivate: [AngularFireAuthGuard],
    path: '',
    children: [
      {path: 'sign-out', loadChildren: () => import('./modules/auth/sign-out/sign-out.module').then(m => m.SignOutModule)},
      {path: 'tabs', loadChildren: () => import('./modules/tabs/tabs.module').then(m => m.TabsPageModule)},
      {path: 'game', loadChildren: () => import('./modules/game/game.module').then(m => m.GameModule)},
    ],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
    // loadChildren: () => import('./modules/tabs/tabs.module').then(m => m.TabsPageModule),
    // ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    canActivate: [AngularFireAuthGuard],
    path: '',
    children: [
      {path: 'sign-in', loadChildren: () => import('./modules/auth/sign-in/sign-in.module').then(m => m.SignInModule)},
      {path: 'sign-up', loadChildren: () => import('./modules/auth/sign-up/sign-up.module').then(m => m.SignUpModule)},
      {path: 'verify-email', loadChildren: () => import('./modules/auth/verify-email/verify-email.module').then(m => m.VerifyEmailModule)},
    ],
    data: { authGuardPipe: redirectLoggedInToHome }
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
