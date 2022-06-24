import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css']
})
export class App1Component implements OnInit {

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
    const index = Number(event.target.value)
    if(index>=0 && index <= this.countrys.length){
    this.countrys.splice(index,1)
    }
    event.target.value = -1
  }

}
