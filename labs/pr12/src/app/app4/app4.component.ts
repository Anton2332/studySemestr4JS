import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app4',
  templateUrl: './app4.component.html',
  styleUrls: ['./app4.component.scss']
})
export class App4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  check = true

  changeCheckTrue(){
    this.check = true
  }

  changeCheckFalse(){
    this.check = false
  }

}
