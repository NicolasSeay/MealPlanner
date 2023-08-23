import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'home/:userId', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '', component: LoginPageComponent }
  // { path: 'recipe/:recipeId', component: RecipePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
