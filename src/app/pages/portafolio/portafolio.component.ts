import { Component, OnInit } from '@angular/core';
import { PaginaserviceService } from 'src/app/services/paginaservice.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  DataItems: any[] = [];
  constructor(private PaginaService:PaginaserviceService) {
    this.PaginaService.getPortafolio();
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

}
