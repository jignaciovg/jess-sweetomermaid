import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Titulo:string = "Home";
  TituloActive:any;
  constructor() {}

  ngOnInit(): void {
    
  }

}
