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

  list1 = ['Микола', 'Василь', 'Петро']
  list2 = ['Іван', 'Дмитро', 'Андрій']

  change(){
    if(this.list2.length !== 0){
      this.list1.push(this.list2[0])
      this.list2.splice(0,1)
    }
  }
}
