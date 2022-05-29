import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketbookingComponent } from '../ticketbooking.component'

@Component({
  selector: 'app-view-area',
  templateUrl: './view-area.component.html',
  styleUrls: ['./view-area.component.scss']
})
export class ViewAreaComponent implements OnInit {
  seatprice=120;
  foodPrice=0;
  finalBill=0;
  
  data : any= TicketbookingComponent.collectiveData;

  constructor() { 
    
  }
  ngOnInit(): void {
    //  collectionData
    this.printRecipt();
  }
  
  getPrice()
  {
    if(this.data.seat>='A1' && this.data.seat<'I1')
    {
      this.seatprice =80;
    }
    if(this.data.seat>='I1' && this.data.seat<'Q1')
    {
      this.seatprice=140;
    }

    if(this.data.seattype === 'Recliner')
    {
      this.seatprice += 30;
    }
    if(this.data.seattype === 'Exclusive')
    {
      this.seatprice += 50;
    }
    if(this.data.foodtype === 'veg')
    {
      this.foodPrice= 80;
    }
    if(this.data.foodtype === 'nonveg')
    {
      this.foodPrice = 120;
    }
  }
  printRecipt()
  {
    this.getPrice();
    this.finalBill =(this.seatprice+this.foodPrice)*this.data.number; 
    
     console.log(this.finalBill);
  }
}
