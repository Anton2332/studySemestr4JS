import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app3',
  templateUrl: './app3.component.html',
  styleUrls: ['./app3.component.scss']
})
export class App3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  countries = [
    "Ukrain","USA"
  ]

  addCounrie(event:any){
    this.countries.push(event.target.value)
    event.target.value = ""
  }

}
