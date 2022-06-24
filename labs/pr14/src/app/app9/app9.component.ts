import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app9',
  templateUrl: './app9.component.html',
  styleUrls: ['./app9.component.css']
})
export class App9Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  value:any
  list = [
    "Ukrain","USA"
  ]

  changeValue(event:any){
    this.value = event.target.value
  }
}
