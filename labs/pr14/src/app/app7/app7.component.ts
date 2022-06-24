import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app7',
  templateUrl: './app7.component.html',
  styleUrls: ['./app7.component.css']
})
export class App7Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  check = true

  changeCheck(event:any){
    this.check = event.target.checked
  }

  check2 = true

  changeCheck2(event:any){
    this.check2 = event.target.checked
  }

}
