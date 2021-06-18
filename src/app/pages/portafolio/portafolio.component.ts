import { Component, OnInit } from '@angular/core';
import { PaginaserviceService } from 'src/app/services/paginaservice.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  DataItems: any[] = [];
  SelectedItem: any[] =[];

  itemImagen:string ="";
  itemTitulo:string ="";
  itemUrl:string ="";
  itemDescription:string ="";
  Titulo:string = "Portafolio";
  TituloActive:any;
  constructor(private PaginaService:PaginaserviceService) {

   }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.PaginaService.getPortafolio().subscribe((data: any) => {
      this.DataItems = data;
      console.log("Numero de items: " + this.DataItems.length);
    });
  }

   getDataImage(item:any){
    console.log("ID SELECCIONADO: "+item.id)
    console.log(item);
    this.SelectedItem = item;
    this.itemImagen = item.imagen;
    this.itemTitulo = item.titulo;
    this.itemUrl = item.url;
    this.itemDescription = item.descripcion;
  }

}
