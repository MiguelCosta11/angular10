import { IfStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  EmpList!: any;
  EmpList2!: any;
  
  @Input()
  id!:number;
  firstName!:string;
  lastName!:string;
  email!:string;
  mobile!:number;
  ngOnInit(): void {
    this.refreshEmpList();
  }

  refreshEmpList(){
    this.service.getAllEmployeesList().subscribe(data=>{this.EmpList=data.employeeDetails;
    });
  }

  updateEmployee(id:number, firstName:string, lastName:string, email:string,mobile:number){
    var val = {id ,firstName,lastName,
                email, mobile};
                console.log(val);
    this.service.updateEmployee(val).subscribe(res=>{
      alert("qualquer coisa");
      location.reload();
  
    });
  }

  deleteEmployee(id:string){
    var val = {id};
                console.log(val);
      if(confirm("quer eliminar o touuuuuu")){
      this.service.deleteEmployee(id).subscribe(res=>{
      alert("qualquer coisa");
      location.reload();
  
    });
  }
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
