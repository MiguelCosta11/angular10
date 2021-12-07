import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://localhost:44311/api";

  constructor(private http:HttpClient) { }

  //User region-----------------------------------------------------------------

  getUserList(){
    return this.http.get<any>(this.APIUrl+'/Login/users')
  }

  signupUser(val:any){
    return this.http.post(this.APIUrl+'/Login/signup',val)
  }

  loginUser(val:any){
    return this.http.post(this.APIUrl+'/Login/login',val)
  }

  //Employee region-------------------------------------------------------------

  getAllEmployeesList(){
    //return this.http.get<any>(this.APIUrl+'​/Employee​/get_all_employees')
    return this.http.get<any>(this.APIUrl+'/Employee/get_all_employees')
    .pipe(map((res:any)=>{
        return res;
    }))
  }


  getEmployeeList(employeeId: string){
      return this.http.get<any>(this.APIUrl+'/Employee/get_employee/id?id='+ employeeId)
    .pipe(map((res:any)=>{
      console.log(employeeId);
      return res;
      
  }))
  }

  addEmployee(val:any){
    //var qualquer = string.replace("%E2%80%8BEmployee%E2%80%8B/add_employee", "/​Employee​/add_employee");
    var oldstr="/%E2%80%8BEmployee%E2%80%8B/add_employee";
    var newstr=oldstr.toString().replace("%E2%80%8B","");
    var oldstr2 = newstr;
    var newstr2 = oldstr2.toString().replace("%E2%80%8B","");
    return this.http.post<any>(this.APIUrl+newstr2,val)
  }

  updateEmployee(val:any){
    var oldstr="/%E2%80%8BEmployee%E2%80%8B/update_employee";
    var newstr=oldstr.toString().replace("%E2%80%8B","");
    var oldstr2 = newstr;
    var newstr2 = oldstr2.toString().replace("%E2%80%8B","");
    return this.http.put<any>(this.APIUrl+newstr2,val)
    
  }
  

  deleteEmployee(id:string){
    //return this.http.delete(this.APIUrl+newstr4,val)
    return this.http.delete<any>(this.APIUrl+'/Employee/delete_employee/'+ id);
  }

}
