import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  };

  constructor(private employeesService: EmployeesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id')

        //call API
        if(id){
          this.employeesService.getEmployee(id).subscribe({
            next: (response) => {
              this.employeeDetails = response
            },
            error:(response) => {
              console.log(response)
            }
          })
        }
      }
    })
  }

  updateEmployee() {
    this.employeesService.updateEmployee
    (this.employeeDetails.id, this.employeeDetails).subscribe({
      next: (response) => {
        this.router.navigate(['employees'])
      }
      });
  }

  deleteEmployee(id: string) {
    if(confirm("Are you sure? You won't be able to revert this!"))
    this.employeesService.deleteEmployee(id).subscribe({
      next: (response) => {
        this.router.navigate(['employees'])
      }
    });
  }

}
