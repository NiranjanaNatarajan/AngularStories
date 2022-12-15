import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { TablesComponent } from './tables/tables.component';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [{path: 'dashboard', component: DashboardComponent},
{path: '', component: LoginComponent},
{path: 'charts', component: ChartsComponent},
{path: 'tables', component: TablesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
