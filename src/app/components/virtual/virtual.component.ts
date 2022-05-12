import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  public personas: any[] = new Array(1000).fill({nombre: 'Juan', apellido: 'Perez'});

  constructor() { }

  ngOnInit(): void {
  }

}
