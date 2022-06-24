import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class App2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  countrys = [
    "Ukrain","USA"
  ]

  addCountry(event:any){
    this.countrys.push(event.target.value)
    this.countrys.sort()
    event.target.value = ""
  }

  deleteCountry(event:any){
    const name = event.target.value
    this.countrys = this.countrys.filter(e => e.toLocaleLowerCase() !== name.toLocaleLowerCase())
    event.target.value = ""
  }
}
