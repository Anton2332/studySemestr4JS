import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app3',
  templateUrl: './app3.component.html',
  styleUrls: ['./app3.component.css']
})
export class App3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  list = [
    "Ukrain","USA"
  ]

  list2 = [
    "Ukrain","USA"
  ]

  changeList(event:any){
    if(event.target.checked){
      this.list = this.list2.filter(e => e.indexOf("k") !== -1)
    }else{
      this.list = this.list2
    }
  }

}
