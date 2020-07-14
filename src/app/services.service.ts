import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  idEmployees:Observable<any>;
  allEmployees:Observable<any>;

  getIdEmployees(id:string){

    const url_apiEmployees = `http://localhost:56708/api/Employee?cedula=${id}`;
    this.idEmployees =this.http.get(url_apiEmployees);
    return  this.idEmployees;
  }
  
  getAllEmployees (){
    const url_AllapiEmployees = `http://localhost:56708/api/Employees`;
    this.allEmployees =this.http.get(url_AllapiEmployees);
    console.log(this.allEmployees);
    return  this.allEmployees;
  }
}
