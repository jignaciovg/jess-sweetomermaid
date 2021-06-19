import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  Titulo:string = "Sobre mi";
  TituloActive:any;
  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('menu', this.Titulo);
  }

}
