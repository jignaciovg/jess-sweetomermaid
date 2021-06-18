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


import {Component} from '@angular/core';

/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  showFiller = false;
  titulo:string = "Portafolio";
}
