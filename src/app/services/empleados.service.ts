import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor( private http: HttpClient) { }

  private API_EMPLEADOS ='https://api.sampleapis.com/futurama/characters'

  getEmpleados(): Observable <any>{
    return this.http.get( this.API_EMPLEADOS )
  }


  // https://api.sampleapis.com/futurama/characters/id
  getEmpleadoUnico(id: any):Observable<any>{
    return this.http.get( `${this.API_EMPLEADOS}/${id}` )
    //return this.http.get(this.API_EMPLEADOS+"/"+id)
  }


}
