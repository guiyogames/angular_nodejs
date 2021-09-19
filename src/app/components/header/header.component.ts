import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 // Variable para fecha (pipe de javascript).   
fecha: any; 


  constructor() { }

  ngOnInit(): void {
 // Campturamos la variable con "this.fecha y mostramos en el Dom (header.html)"
 //this.fecha = new Date(1981,11,24); Le pasamos una fecha inventada dentro del ().
  this.fecha = new Date()
 } 
 
}
