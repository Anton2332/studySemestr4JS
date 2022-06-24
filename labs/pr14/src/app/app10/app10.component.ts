import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-app10',
  templateUrl: './app10.component.html',
  styleUrls: ['./app10.component.css']
})
export class App10Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value=0
  list = [
    {country:"Ukrain",cities:["Chernivtsi","Lviv"]},
    {country:"USA",cities:["New York","California"]}
  ]

  changeValue(event:any){
    this.value = Number(event.target.value)
  }
}
