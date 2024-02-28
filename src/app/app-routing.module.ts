import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';

const routes: Routes = [
  {
    path: "",
    component: EmployeesListComponent
  },
  {
    path: "employees",
    component: EmployeesListComponent
  },
  {
    path: "employees/add",
    component: AddEmployeeComponent
  },
  {
    path: "employees/edit/:id",
    component: EditEmployeeComponent
  },
  {
    path: "employees/delete/:id",
    component: DeleteEmployeeComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
