import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serverss',
  templateUrl: './serverss.component.html',
  styleUrls: ['./serverss.component.css']
})
export class ServerssComponent implements OnInit {
  public name = "Teju";
  constructor() { }

  ngOnInit(): void {
  }
  greetMe(){
    return "Welcome to angular " + this.name;
  } 
}
