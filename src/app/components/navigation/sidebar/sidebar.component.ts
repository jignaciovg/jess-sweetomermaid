/*import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor() { }
  ngOnInit(): void {
  }
}*/


import {Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';

/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit  {
  showFiller = false;
  titulo:string = "Portafolio";
  public TituloActive:any;

  constructor(private titleService: Title) {
    this.TituloActive = localStorage.getItem('menu');
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
    this.TituloActive = localStorage.getItem('menu');
    console.log(this.TituloActive);
  }

  ngOnInit(): void {
  }
}
