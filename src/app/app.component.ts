import { Component, OnInit } from '@angular/core';
const printMs = require('dgtech-npm-package-app');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dgtech-npm-package-consumer-app';

  ngOnInit(): void {
    this.mainFunc();
  }

  mainFunc(){
    printMs.printMsg();
  }
}
