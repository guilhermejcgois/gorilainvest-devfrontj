import { NgModule } from '@angular/core';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { RouterModule, Routes } from '@angular/router';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['shop-list']);

const routes: Routes = [
  {
    path: 'auth',
    ...canActivate(redirectLoggedInToItems),
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'shop-list',
    ...canActivate(redirectUnauthorizedToLogin),
    loadChildren: () => import('./shop-list/shop-list.module').then(m => m.ShopListModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
