import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input()
  firstName!:string;
  lastName!:string;
  email!:string;
  mobile!:number;

  ngOnInit(): void {
  }

  addEmployee(){
    var val = {firstName:this.firstName,lastName:this.lastName,
                email:this.email, mobile:this.mobile};
                console.log(val);
    this.service.addEmployee(val).subscribe(res=>{
      alert("qualquer coisa");
  
    });
  }

  
}

