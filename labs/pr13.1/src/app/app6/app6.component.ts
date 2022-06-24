import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app6',
  templateUrl: './app6.component.html',
  styleUrls: ['./app6.component.css']
})
export class App6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numbers = [
    1,2,3,4,5
  ]

  sum = this.numbers.reduce((a,b)=>a+b,0)

  addNumber(event:any){
    const number = Number(event.target.value)
    this.numbers.push(number)
    event.target.value = ""
    this.sum = this.numbers.reduce((a,b)=>a+b,0)
  }

}
