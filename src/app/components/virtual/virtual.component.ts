import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  public personas: any[] = new Array(1000).fill({ nombre: 'Juan', apellido: 'Perez' });

  @ViewChild(CdkVirtualScrollViewport) viewport!: CdkVirtualScrollViewport;

  constructor() { }

  ngOnInit(): void {
  }

  public scrollTo(index: number): void {
    this.viewport.scrollToIndex(index);
  }

}
