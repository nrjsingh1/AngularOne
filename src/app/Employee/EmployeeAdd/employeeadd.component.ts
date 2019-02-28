import { Component, Output, EventEmitter } from "@angular/core";
import { Employee } from "src/app/models/employee";
import { EmployeeService } from "../services/employee.service";
import {
  FormsModule,
  FormControl,
  Validators,
  FormGroup
} from "@angular/forms";

@Component({
  selector: "employeeadd",
  templateUrl: "../EmployeeAdd/employeeadd.component.html"
})
export class EmployeeAddComponent {
  MyForm: FormGroup = new FormGroup({
    fname: new FormControl("", Validators.required),
    lname: new FormControl("", Validators.required),
    age: new FormControl("", Validators.required)
  });

  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  @Output() save: EventEmitter<Employee> = new EventEmitter<Employee>();

  Cancel() {
    this.cancel.emit();
  }
  emp: Employee = new Employee("f", "l", 0);

  SaveEmployees() {
    //const e: Employee = new Employee("F4", "L4", 4);
    const e: Employee = new Employee(
      this.MyForm.value.fname,
      this.MyForm.value.lname,
      this.MyForm.value.age
    );
    this.save.emit(e);
  }
}
