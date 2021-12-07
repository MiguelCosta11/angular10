import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    
  }

  EmpList!: any;
  EmpList2!: any;

  @Input()
  id!:number;
  firstName!:string;
  lastName!:string;
  email!:string;
  mobile!:number;

  updateEmployee(id: any){
    var val = {this:id = id,firstName:this.firstName,lastName:this.lastName,
                email:this.email, mobile:this.mobile};
                console.log(val);
    this.service.updateEmployee(val).subscribe(res=>{
      alert("qualquer coisa");
      location.reload();
  
    });
  }

  SingleEmployee(employeeId: string){
    this.service.getEmployeeList(employeeId)
    .subscribe(res=>{
        this.EmpList2=res.employeeDetails;
        this.EmpList2 = Array.of(res.employeeDetails);
        console.log(this.EmpList2);
    })
  
  }
  
}
