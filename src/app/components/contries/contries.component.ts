import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-contries',
  templateUrl: './contries.component.html',
  styleUrls: ['./contries.component.css']
})
export class ContriesComponent implements OnInit {

  public countries: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://restcountries.com/v2/lang/es')
      .subscribe(response => this.countries = response);
  }

  public drop(event: CdkDragDrop<any>) {
    moveItemInArray(this.countries, event.previousIndex, event.currentIndex);
  }

}
