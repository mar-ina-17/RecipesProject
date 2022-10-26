import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './pages/auth/auth-guard.service';
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/auth/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'recipes',
    loadChildren: () =>
      import('./pages/recipes/recipes.module').then((m) => m.RecipesModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'shopping-list',
    loadChildren: () =>
      import('./pages/shopping-list/shopping-list.module').then(
        (m) => m.ShoppingListModule
      ),
  },
  { path: '**', redirectTo: '/recipes', pathMatch: 'full' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
