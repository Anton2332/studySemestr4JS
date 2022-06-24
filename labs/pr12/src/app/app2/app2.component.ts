import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.scss']
})
export class App2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inputNumber = 0

  inputHandler(event:any){
    this.inputNumber = Number(event.target.value)
  }
}
