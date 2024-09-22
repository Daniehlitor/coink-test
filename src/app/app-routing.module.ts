import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StartComponent } from './screens/start/start.component';
import { RegisterComponent } from './screens/register/register.component';
import { HomeComponent } from './screens/home/home.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
  },
  {
    path: 'start',
    component: StartComponent,
    canActivate: [authGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [authGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
