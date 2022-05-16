import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Seats } from 'src/app/seats';
import { ApiService } from 'src/app/services/api.service';
import { TicketbookingComponent } from '../ticketbooking.component'

@Component({
  selector: 'app-ticket-preview',
  templateUrl: './ticket-preview.component.html',
  styleUrls: ['./ticket-preview.component.css']
})
export class TicketPreviewComponent implements OnInit {
  date :any = new Date().toLocaleDateString();
  // totalSeats : any= TicketbookingComponent.collectiveData;
  seatDetail: Seats[] = TicketbookingComponent.ticketBooked;
  constructor(private apiService:ApiService) {
   
   }

  ngOnInit(): void {
    // console.log(TicketbookingComponent.collectiveData.value.number);
    // this.seatNumberDelete();
  }
  // seatNumberDelete()
  // {
  //   console.log(this.seatDetail.length);
  //   for(var i=0;i<this.seatDetail.length;i++)
  //   {
  //     console.log("hey "+i);
  //     console.log(this.seatDetail[i]);
  //     this.apiService.deleteSeats(this.seatDetail[i].id);
  //   }
  // }

}
