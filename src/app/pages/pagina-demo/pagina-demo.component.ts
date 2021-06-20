import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PaginaserviceService } from 'src/app/services/paginaservice.service';
import { ElementRef, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-pagina-demo',
  templateUrl: './pagina-demo.component.html',
  styleUrls: ['./pagina-demo.component.css']
})
export class PaginaDemoComponent implements OnInit {

  //SIDEBAR
  titulo:string = "Portafolio";
  public TituloActive:any;
  public TituloSelected:any;
  public showCategoria:number=0;

  //PORTAFOLIO
  DataItems: any[] = [];
  SelectedItem: any[] =[];
  itemImagen:string ="";
  itemTitulo:string ="";
  itemUrl:string ="";
  itemDescription:string ="";

  //COMISIONES
  DataComisiones: any[] = [];

  elementP: HTMLElement | undefined;
  elementA: HTMLElement | undefined;
  elementC: HTMLElement | undefined;

  constructor(private titleService: Title,private PaginaService:PaginaserviceService) {
    this.PaginaService.getComisiones();
    this.showCategoria = 1;
    this.elementP = document.getElementById('Portafolio') as HTMLElement;
    this.elementA = document.getElementById('About') as HTMLElement
    this.elementC = document.getElementById('Comision') as HTMLElement;
   }

  public async setTitle(newTitle: string, seccion:string,value:number) {

    this.titleService.setTitle(newTitle);
    this.TituloSelected = seccion;
    this.showCategoria = value;

    //console.log("PAGINA "+ seccion);
    //console.log("CATEGORIA: "+value);

    switch(value){
      case 1:
        this.showCategoria = 1;
        this.elementP =  document.getElementById('Portafolio') as HTMLElement;
        this.elementP = document.getElementById('Portafolio') as HTMLElement;
        this.elementP.style.display = "block"
        this.elementA = document.getElementById('About') as HTMLElement
        this.elementA.style.display = "none"
        this.elementC = document.getElementById('Comision') as HTMLElement;
        this.elementC.style.display = "none"
        this.elementP.scrollIntoView({behavior:"smooth"});
        break;
      case 2:
        this.showCategoria = 2;
        this.elementA = document.getElementById('About') as HTMLElement;
        this.elementP = document.getElementById('Portafolio') as HTMLElement;
        this.elementP.style.display = "none"
        this.elementA = document.getElementById('About') as HTMLElement
        this.elementA.style.display = "block"
        this.elementC = document.getElementById('Comision') as HTMLElement;
        this.elementC.style.display = "none"
        this.elementA.scrollIntoView({behavior:"smooth"});
        break;
      case 3:
        this.showCategoria = 3;
        this.elementC = document.getElementById('Comision') as HTMLElement;
        this.elementP = document.getElementById('Portafolio') as HTMLElement;
        this.elementP.style.display = "none"
        this.elementA = document.getElementById('About') as HTMLElement
        this.elementA.style.display = "none"
        this.elementC.style.display = "block"
        this.elementC.scrollIntoView({behavior:"smooth"});
        break;
    }
  }

  public async setTitleTopBar(newTitle: string, seccion:string,value:number) {

    this.titleService.setTitle(newTitle);
    this.TituloSelected = seccion;
    this.showCategoria = value;

    //console.log("PAGINA "+ seccion);
    //console.log("CATEGORIA: "+value);

    switch(value){
      case 1:
        this.showCategoria = 1;
        this.elementP =  document.getElementById('Portafolio') as HTMLElement;
        this.elementP = document.getElementById('Portafolio') as HTMLElement;
        this.elementP.style.display = "block"
        this.elementA = document.getElementById('About') as HTMLElement
        this.elementA.style.display = "none"
        this.elementC = document.getElementById('Comision') as HTMLElement;
        this.elementC.style.display = "none"
        //this.elementP.scrollIntoView({behavior:"smooth"});
        break;
      case 2:
        this.showCategoria = 2;
        this.elementA = document.getElementById('About') as HTMLElement;
        this.elementP = document.getElementById('Portafolio') as HTMLElement;
        this.elementP.style.display = "none"
        this.elementA = document.getElementById('About') as HTMLElement
        this.elementA.style.display = "block"
        this.elementC = document.getElementById('Comision') as HTMLElement;
        this.elementC.style.display = "none"
        //this.elementA.scrollIntoView({behavior:"smooth"});
        break;
      case 3:
        this.showCategoria = 3;
        this.elementC = document.getElementById('Comision') as HTMLElement;
        this.elementP = document.getElementById('Portafolio') as HTMLElement;
        this.elementP.style.display = "none"
        this.elementA = document.getElementById('About') as HTMLElement
        this.elementA.style.display = "none"
        this.elementC.style.display = "block"
        //this.elementC.scrollIntoView({behavior:"smooth"});
        break;
    }
  }

  ngOnInit(): void {
    this.getDataPortafolio();
    this.getDataComision();
    this.TituloSelected = this.titulo;
    this.elementP = document.getElementById('Portafolio') as HTMLElement
    this.elementP.style.display = "block"
    this.elementA = document.getElementById('About') as HTMLElement
    this.elementA.style.display = "none"
    this.elementC = document.getElementById('Comision') as HTMLElement;
    this.elementC.style.display = "none"
  }


  getDataPortafolio() {
    this.PaginaService.getPortafolio().subscribe((data: any) => {
      this.DataItems = data;
      //console.log("Numero de items: " + this.DataItems.length);
    });
  }

  getDataComision() {
    this.PaginaService.getComisiones().subscribe((data: any) => {
      this.DataComisiones = data;
      //console.log("Numero de items: " + this.DataItems.length);
    });
  }

   getDataImage(item:any){
    //console.log("ID SELECCIONADO: "+item.id)
    //console.log(item);
    this.SelectedItem = item;
    this.itemImagen = item.imagen;
    this.itemTitulo = item.titulo;
    this.itemUrl = item.url;
    this.itemDescription = item.descripcion;
  }

}
