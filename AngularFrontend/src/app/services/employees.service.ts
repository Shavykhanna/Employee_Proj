import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Employees} from '../models/Employees';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  JSON_URL = 'https://localhost:5001/api/employee';

  constructor(private http: HttpClient) { }
  getAllEmployees():Observable<Employees>{
    return this.http.get<Employees>(this.JSON_URL);
  }

  postData(params:any ):Observable<Employees>{
    return this.http.post<Employees>(this.JSON_URL,{params});
  }

  updateEmployee(id:Number, params: Object={}):Observable<Employees>{
    let url = `${this.JSON_URL}/${id}`;
    console.log(url);
    return this.http.put<Employees>(url,{params});
  }
  deleteEmployee(id:Number){
    let url=`${this.JSON_URL}/${id}`;
    return this.http.delete(url);
  }

}
