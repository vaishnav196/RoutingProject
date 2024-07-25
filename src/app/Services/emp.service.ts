import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor( private http:HttpClient) { 
   
  }
  url="http://localhost:3000/emps";



  getEmps(){
    return this.http.get(this.url)
  }

  saveEmp(data:any){
    return this.http.post(this.url,data);
    
  }
  deleteEmp(id: number) {
    //const deleteUrl = `${this.url}/${id}`;
    return this.http.delete(`${this.url}/${id}`);

  }

  updateEmp(id: number, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }
  
  }



 

