import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app5',
  templateUrl: './app5.component.html',
  styleUrls: ['./app5.component.css']
})
export class App5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  list = [
    {check:true,text:"text"},
    {check:true,text:"text2"}
  ]

  changeListIndex(event:any,index:number){
    this.list[index].check = event.target.checked
  }
}
