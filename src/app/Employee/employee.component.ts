import { Component, OnInit } from "@angular/core";
import { Employee } from "../models/employee";
import { EmployeeService } from "./services/employee.service";

@Component({
  selector: "employee",
  templateUrl: "./employee.component.html"
})
export class EmployeeComponent implements OnInit {
  hideList: boolean;
  MyEmployees: Array<Employee>;
  constructor(private eService: EmployeeService) {}

  ngOnInit(): void {
    this.hideList = false;
    // this.MyEmployees =
    // this.eService.GetEmployees().subscribe((x: Array<Employee>) => {
    //   this.MyEmployees = x;
    // });
    // this.eService.OnEmployeeUpdate.subscribe(() => {
    //   alert("Grid Refreshed");
    //   this.MyEmployees = this.eService.GetEmployees();
    // });
    this.RefreshEmployees();
    this.eService.OnEmployeeUpdate.subscribe(() => {
      this.RefreshEmployees();
    });
  }
  private RefreshEmployees() {
    this.eService.GetEmployees().subscribe((x: Array<Employee>) => {
      this.MyEmployees = x;
    });
  }

  toggleList() {
    this.hideList = !this.hideList;
  }

  SaveEmployees(e: Employee) {
    // this.MyEmployees.push(e);
    this.eService.SaveEmployees(e);
    this.hideList = false;
  }
}
