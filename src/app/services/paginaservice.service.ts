import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const PortafolioData:string = 'assets/json/portafolio-data.json';
const ComisionesData:string = 'assets/json/comisiones-data.json';

@Injectable({
  providedIn: 'root'
})
export class PaginaserviceService {

  constructor(private http:HttpClient) { }

  getPortafolio(){
    return this.http.get(PortafolioData);
  }
  getComisiones(){
    return this.http.get(ComisionesData);
  }
}
