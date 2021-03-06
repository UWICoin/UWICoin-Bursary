import { AuthGuard } from './services/auth-guard/auth-guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { MainComponent } from './components/main.component';
import { NotFoundPageComponent } from './modules/core/pages/404/404.page';

const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: 'app/modules/authentication/authentication.module#AuthenticationModule'
  },
  {
    path: 'not-found',
    component: NotFoundPageComponent
  },
  {
    path: 'bursary', component: MainComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'accounts',
        loadChildren: 'app/modules/accounts/accounts.module#AccountsModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'vendors',
        loadChildren: 'app/modules/vendors/vendors.module#VendorsModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'transactions',
        loadChildren: 'app/modules/transactions/transactions.module#TransactionsModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'settings',
        loadChildren: 'app/modules/settings/settings.module#SettingsModule',
        canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: 'accounts',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'not-found',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'authentication',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
