import { Component } from "@angular/core";

@Component({
  selector: "customer",
  templateUrl: "./customer.component.html"
})
export class CustomerComponent {
  IsA: boolean;
  IsB: boolean;

  constructor() {
    this.IsA = false;
    this.IsB = true;
  }

  toggleCusotmer() {
    this.IsA = !this.IsA;
    this.IsB = !this.IsB;
  }
}
