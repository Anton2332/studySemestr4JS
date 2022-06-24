import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app5',
  templateUrl: './app5.component.html',
  styleUrls: ['./app5.component.scss']
})
export class App5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  check = true

  changeCheck(){
    this.check = !this.check
  }

}
