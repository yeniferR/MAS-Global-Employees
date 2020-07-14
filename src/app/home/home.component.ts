import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
valor:any='';
resultEmployees:Array< any>;
miLista:Array< any>=[];
data: any =[];
displayedColumns: string[] = ['Id Number', 'Name', 'Contract Type', 'Hourly Salary', 'Monthly Salary', 'Yearly Salary'];
// resultallEmployees:Array< any>;

  constructor(private route: ActivatedRoute,
    private router: Router,private dataApiEmployees: ServicesService) { }

  ngOnInit(): void {
  }
  getResulEmployees(){
    console.log(this.valor);
    if(this.valor == ""){
     this.AllEmployees();
    } 
    else{
      this.Employees(this.valor);

  }
  }
  private Employees(id:any){
    this.dataApiEmployees.getIdEmployees(id).subscribe((json)=>{ 
      //  console.log(json['EMPLOYEE'][0]);
       if(json == "No se encontro valor con el numero de cedula"){
         alert("Employee not found");
       } else{
        this.resultCompleted(json['EMPLOYEE'][0]);
       }
        
      });
  }

  private AllEmployees(){
    console.log("ingrese");
    this.dataApiEmployees.getAllEmployees().subscribe((json)=>{ 

      console.log(json['EMPLOYEES']);
      this.resultAllEmployees(json['EMPLOYEES']);
     });
  }

  private resultCompleted(json:any):void{   
    console.log(json); 
    // json[0];
    this.resultEmployees =new Array<any>();
      this.resultEmployees.push(json);
      // this.resultEmployees =json;
      // console.log(this.resultEmployees);
  }
  private resultAllEmployees(json:any):void{   
    // console.log(json); 
      this.resultEmployees =json;
      // console.log(this.resultEmployees);
  }

}
