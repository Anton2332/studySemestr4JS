import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-app7',
  templateUrl: './app7.component.html',
  styleUrls: ['./app7.component.scss']
})
export class App7Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  courses = [
    {course:"html",complyte:true},
    {course:"css",complyte:true},
    {course:"php",complyte:false},
    {course:"js",complyte:true},
    {course:"angular",complyte:false}
  ]

  

}
