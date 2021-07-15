import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ViewEmployeeComponent },
      { path: 'employees', component: ViewEmployeeComponent },
      { path: 'client/add', component: AddEmployeeComponent },
      { path: 'client/update/:id', component: UpdateEmployeeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
