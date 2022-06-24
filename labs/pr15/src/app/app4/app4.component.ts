import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app4',
  templateUrl: './app4.component.html',
  styleUrls: ['./app4.component.css']
})
export class App4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  list = [
    {name:"Name",date:Date(),age:12},
    {name:"Name1",date:Date(),age:22}
  ]

}
