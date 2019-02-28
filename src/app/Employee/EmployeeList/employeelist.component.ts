import { Component, Output, EventEmitter, Input } from "@angular/core";
import { Employee } from "../../models/employee";
@Component({
  selector: "employeelist",
  templateUrl: "../EmployeeList/employeelist.component.html"
})
export class EmployeeListComponent {
  @Input() Employees: Array<Employee>;
  @Output() addNew: EventEmitter<void> = new EventEmitter<void>();
  constructor() {
    
  }

  addEmployee() {
    this.addNew.emit();
  }
}
