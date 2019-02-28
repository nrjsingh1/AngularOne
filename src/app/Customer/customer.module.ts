import { NgModule } from "@angular/core";
import { CustomerComponent } from "./customer.component";
import { NewCustomerComponent } from "./NewCustomerComponent/newCustomer.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [CustomerComponent, NewCustomerComponent],
  exports: [CustomerComponent, NewCustomerComponent]
})
export class CustomerModule {}
