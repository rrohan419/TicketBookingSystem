import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Seats } from '../../seats';
import { TicketbookingComponent } from '../ticketbooking.component';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  
  products:Seats[]=[]
  seatbooked:any;
  constructor(private apiServices:ApiService) {
    this.apiServices.getSeats("users").subscribe(data=>{
      this.products=data;
    })
    
   }
  

  ngOnInit(): void {
    // this.creatingTable();
    this.seatbooked= TicketbookingComponent.ticketBooked;
    console.warn(this.seatbooked,"aaaaaaaa");
   
   
  }
  
}
