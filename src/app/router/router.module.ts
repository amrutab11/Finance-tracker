import { ApplicationConfig, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from '../transaction-list/transaction-list.component';
import { TransactionComponent } from '../transaction/transaction.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

// @NgModule({
//   declarations: [],
//   imports: [CommonModule, RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })

export const routes: Routes = [
  { path: 'transactions', component: TransactionListComponent },
  { path: 'transactions/:id/:option', component: TransactionComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: DashboardComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync()],
};
// export class AppRouterModule {}
