import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Iemployee } from "./employee";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeService {

  private _url :string = "/assets/data/employees.json";

  constructor(private http: HttpClient) { }

  getEmployess(): Observable<Iemployee[]>{
    return this.http.get<Iemployee[]>(this._url)
                    .catch(this.errorHandler);
  }

  errorHandler(error:HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

}
