import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/component/home.component';
import { LoginComponent } from './pages/login/component/login.component';
import { AuthGuard } from './shared/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  {
    path: 'Home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'Orders',
    loadChildren: () =>
      import('./pages/orders/orders.module').then((m) => m.OrdersModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'About',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path: 'refresh',
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
