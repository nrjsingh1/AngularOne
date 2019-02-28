import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { EmployeeComponent } from "./Employee/employee.component";
import { EmployeeListComponent } from "./Employee/EmployeeList/employeelist.component";
import { EmployeeAddComponent } from "./Employee/EmployeeAdd/employeeadd.component";
import { EmployeeService } from "./Employee/services/employee.service";
import { CustomerModule } from "./Customer/customer.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CustomerComponent } from "./Customer/customer.component";
//import { ConcatPipe } from "./pipes/ConcatPipe";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  imports: [
    BrowserModule,
    CustomerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeAddComponent
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
