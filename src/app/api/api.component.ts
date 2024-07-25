import { Component } from '@angular/core';
import { EmpService } from '../Services/emp.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.scss'
})
export class APIComponent {
constructor( private empServ:EmpService,private fb:FormBuilder){
this.getAllEmp()
}
isUpdate: boolean = false;
updateId: number | null = null;
allData:any
getAllEmp(){
  this.empServ.getEmps().subscribe(data=>{
this.allData=data;
  })
}

formDetails=this.fb.group({
name:[''],
email:[''],
Salary:['']

});
// SaveDetails(formdata:any){

// this.empServ.saveEmp(formdata).subscribe(res=>{
  
// alert("emp added successfully");
// this.getAllEmp();
// });
// }
SaveDetails(formdata: any) {
  if (this.isUpdate && this.updateId !== null) {
    this.empServ.updateEmp(this.updateId, formdata).subscribe(res => {
      alert("Employee updated successfully");
      this.getAllEmp();
      this.resetForm();
    });
  } else {
    this.empServ.saveEmp(formdata).subscribe(res => {
      alert("Employee added successfully");
      this.getAllEmp();
      this.resetForm();
    });
  }
}

deleteEmployee(id: number) {
 
this.empServ.deleteEmp(id).subscribe(d=>{
  alert("Employee Deleted Successfully");
  this.getAllEmp();
})

}

UpdateEmployee(id: number) {
  const employee = this.allData.find((emp: any) => emp.id === id);
  if (employee) {
    this.formDetails.setValue({
      name: employee.name,
      email: employee.email,
      Salary: employee.Salary
    });
    this.isUpdate = true;
    this.updateId = id;
  }
}
resetForm() {
  this.formDetails.reset();
  this.isUpdate = false;
  this.updateId = null;
}
// userid:any;
  // EditEmp(userdata:any){
  //   this.userid=userdata.id;
  //   this.details.controls.name.setValue(userdata.name);
  //   this.details.controls.email.setValue(userdata.email);
  //   this.details.controls.salary.setValue(userdata.salary);
  // }

  // UpdateEmp(){
  //   this.service.updateEmp(this.details.value,this.userid).subscribe(res=>{
  //     alert("Updated successfully");
  //     this.getAllEmpData();
  //   });
  // }
}
