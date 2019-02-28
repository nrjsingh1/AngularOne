import { Employee } from "../../models/employee";
import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable()
export class EmployeeService {
  private MyEmployees: Array<Employee>;

  OnEmployeeUpdate: EventEmitter<void> = new EventEmitter<void>();

  constructor(private http: HttpClient) {}
  GetEmployees(): Observable<any> {
    const URL = "http://demoapi.justcompile.com/api/employee";
    return this.http.get(URL).pipe(
      map((x: Array<any>) => {
        return x.map(y => new Employee(y.fName, y.lName, y.age));
      })
    );
    //this.MyEmployees = new Array<Employee>();
    // this.MyEmployees.push(new Employee("F1", "L1", 1));
    // this.MyEmployees.push(new Employee("F2", "L2", 2));
    // this.MyEmployees.push(new Employee("F3", "L3", 3));
    //return this.MyEmployees;
  }
  SaveEmployees(e: Employee): void {
    // this.MyEmployees.push();


    const URL= 'http://demoapi.justcompile,com/api/employee';
    const newEmployee = {fName:e.fname,lName:e.lname,age:e.age};
    this.OnEmployeeUpdate.emit();
  }

  UpdateEmployee() {
    this.OnEmployeeUpdate.emit();
  }
}
