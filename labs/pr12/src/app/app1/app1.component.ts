import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.scss']
})
export class App1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  input = 0
  inputHandler(event:any){
    this.input = Number(event.target.value)
  }

}
