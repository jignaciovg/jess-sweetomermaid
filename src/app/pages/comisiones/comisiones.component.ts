import { Component, OnInit } from '@angular/core';
import { PaginaserviceService } from 'src/app/services/paginaservice.service';

@Component({
  selector: 'app-comisiones',
  templateUrl: './comisiones.component.html',
  styleUrls: ['./comisiones.component.css']
})
export class ComisionesComponent implements OnInit {
  DataItems: any[] = [];

  Titulo:string = "Comisiones";
  TituloActive:any;
  constructor(private PaginaService:PaginaserviceService) {
    this.PaginaService.getComisiones();
   }

  ngOnInit(): void {
    this.getData();
    localStorage.setItem('menu', this.Titulo);
  }

  getData() {
    this.PaginaService.getComisiones().subscribe((data: any) => {
      this.DataItems = data;
      console.log("Numero de items: " + this.DataItems.length);
    });
  }

}
