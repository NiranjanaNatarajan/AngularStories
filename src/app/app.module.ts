import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { DemoComponent } from './demo/demo.component';
import { CalculatorComponent } from './calculator/calculator.component';
// import { ToolbarComponent } from './dashboard/toolbar/toolbar.component';
// import { NavtabsComponent } from './dashboard/navtabs/navtabs.component';
// import { SidenavListComponent } from './dashboard/sidenav-list/sidenav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ChartsComponent,
    TablesComponent,
    DemoComponent,
    CalculatorComponent,
    // ToolbarComponent,
    // NavtabsComponent,
    // SidenavListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
