import { Component, OnInit } from '@angular/core';
import { Seats } from '../seats';
import { TicketbookingComponent } from '../ticketbooking/ticketbooking.component';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
 static bookingDetails:{movie:'', time:'', seat_number:Seats[],food_opted:''}[]=[];
 copyBookingDetails:{movie:'', time:'', seat_number:Seats[],food_opted:''}[]=[];
  seatBooked:Seats[]=[];
 static count=0;
 copyCount=0;
  constructor() {
    this.copyBookingDetails[this.copyCount]=DataComponent.bookingDetails[this.copyCount];
    this.copyCount++;
   }

  ngOnInit(): void {
    // this.creatingTable();
  
  }
  public static creatingTable()
  {
    this.bookingDetails[this.count].movie = TicketbookingComponent.collectiveData.value.movie;
    this.bookingDetails[this.count].time = TicketbookingComponent.collectiveData.value.time;
    this.bookingDetails[this.count].seat_number = TicketbookingComponent.ticketBooked;
    // this.seatBooked[this.count] = TicketbookingComponent.ticketBooked;
    this.bookingDetails[this.count].food_opted=TicketbookingComponent.collectiveData.food;
    console.log("data component",this.bookingDetails[this.count]);
    this.count++;
  }
}
