import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  currentTime:any;
  currentHour:number;
  display:string="some error";
  changeHead=false;
  constructor() {
    this.currentTime=new Date().toLocaleDateString();
    this.currentHour=new Date().getHours();
    if(this.currentHour>=12)
    {
      this.changeHead=true;
    }
   }

  ngOnInit(): void {
    
  }

  greeting(){
    if(this.currentHour>=0 && this.currentHour<12 )
    {
        this.display="Good Morning!";
    }
    else if(this.currentHour>=12 && this.currentHour<18 )
    {
      this.display="Good AfterNoon!";
    }
    else if(this.currentHour>=18 && this.currentHour<=24)
    {
      this.display="Good Evening!";
    }
    return this.display;
  }
  
}
