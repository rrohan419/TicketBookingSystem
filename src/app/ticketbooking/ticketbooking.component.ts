import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Seats } from '../seats';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-ticketbooking',
  // templateUrl: './ticketbooking.component.html',
  templateUrl: './ticketbooking.component.html',
  styleUrls: ['./ticketbooking.component.scss']
})
export class TicketbookingComponent implements OnInit {
  formdetails !:FormGroup;
  public static collectiveData:any={
    movie:'',
    time:'',
    seat:'',
    number:'',
    foodtype:'',
    seattype:''
  };
  topics=['Movie1','Movie2','Movie3','Movie4','Movie5'];
  times = ['9:30 AM','11:45 AM','1:15 PM','3:30 PM','6.30 PM','9:00 PM','11:00 PM'];
  foods = ['veg','nonveg','none'];
  seatType =['Regular','Exclusive','Recliner'];
  seatnumber:Seats[]=[];
  copySeatnumber:Seats[]=[];

  num:any=[];
  public static ticketBooked:Seats[]=[];
  selectedSeatNumber:any;
  numberOfSeats:any;
  index:number=0;
  
  constructor(private router: Router, private apiService:ApiService, route:ActivatedRoute, private http: HttpClient) {
   
   
   }
   
   
  ngOnInit(): void {
    let url='seat';
    this.apiService.getSeats(url).subscribe(data=>{
      this.seatnumber=data;
      this.copySeatnumber=data;
      // console.warn(this.seatnumber);
      // console.log(this.copySeatnumber)
    });
    // if(this.flag===false)
    // {
    //   this.seatNumber();
    //   this.flag=true;
    //   console.log('please just be called once');
    // }
    console.log("init");
    
    
    this.formdetails=new FormGroup({
      movie: new FormControl('',Validators .required),
      time: new FormControl('',Validators.required),
      seat: new FormControl('',Validators.required),
      number: new FormControl('',[Validators.required,Validators.min(1)]),
      foodtype: new FormControl('',Validators.required),
      seattype: new FormControl('',Validators.required)
      
    });
    
    
    console.log(this.formdetails,"hey");
  }
  

  selectingSeat(){
    if(this.formdetails.value.number > 1 )
    {
      this.selectedSeatNumber = TicketbookingComponent.collectiveData.seat;
      this.numberOfSeats = this.formdetails.value.number;
      for(var i=0;i<this.seatnumber.length;i++)
      {
        if(this.seatnumber[i].seat_no ===this.selectedSeatNumber)
        {
          this.index=i;
          TicketbookingComponent.ticketBooked = this.seatnumber.slice(this.index,this.formdetails.value.number+1);
          console.log(TicketbookingComponent.ticketBooked,"selectingSeat()");
          console.log(this.formdetails.value.number);
          console.log(this.index,"index");
          
        }
      } 
    }
   
  }
  
  delete()
  {
    // console.log(this.copySeatnumber+"test");
    for(let j=0;j<TicketbookingComponent.ticketBooked.length;j++)
    {
      console.log(TicketbookingComponent.ticketBooked[j].id+"test"+j);
      for(let i=0;i<this.copySeatnumber.length;i++)
      {
        console.log(this.copySeatnumber[i].id+"-test-"+TicketbookingComponent.ticketBooked[j].id);
        if(TicketbookingComponent.ticketBooked[j].id===this.copySeatnumber[i].id)
        {
          console.log("Success");
          // this.apiService.deleteSeats(this.seatnumber[i].id);
          this.http.delete('http://localhost:3000/seat/'+this.copySeatnumber[i].id);
        }
      }




      // console.log(this.seatnumber[i].seat_no);
      // if(this.seatnumber[i].seat_no===this.selectedSeatNumber)
      // {
      //   console.log("forifloop");
      //   console.log(this.seatnumber[i].id);
      //   this.apiService.deleteSeats(this.seatnumber[i].id);
      //   // this.http.delete('http://localhost:3000/seat/'+this.seatnumber[i].id);
      // }
    }
  }

  // seatNumber()
  // {
  //   for(let i=65; i<=90;i++)
  //   {
  //     for(let j=1;j<=20;j++)
  //     {
  //       let a = String.fromCharCode(i)
  //       this.num.push(a+j);
  //     }
  //   }
  //   return this.num;
  // }
  entryDetails()
  {
    this.copyDetails();
    // console.log(TicketbookingComponent.collectiveData);
    this.selectingSeat();
    this.delete();
    // DataComponent.creatingTable();
    this.router.navigate(['bookingdetails']);
    // alert("movie-name : "+TicketbookingComponent.collectiveData.movie+'\n'+
    //       "movie-time : "+TicketbookingComponent.collectiveData.time+'\n'+
    //       "seat-number : "+TicketbookingComponent.collectiveData.seat +'\n'+
    //       "total-tickets : "+TicketbookingComponent.collectiveData.number+'\n'+
    //       "food-type : "+TicketbookingComponent.collectiveData.foodtype+'\n'+
    //       "seat-type : "+TicketbookingComponent.collectiveData.seattype);
    Swal.fire({
      title: "Booking Details",
      icon: "success"
    })
  }
  copyDetails()
  {
    TicketbookingComponent.collectiveData.movie = this.formdetails.value.movie;
    TicketbookingComponent.collectiveData.time = this.formdetails.value.time;
    TicketbookingComponent.collectiveData.seat= this.formdetails.value.seat;
    TicketbookingComponent.collectiveData.number= this.formdetails.value.number;
    TicketbookingComponent.collectiveData.foodtype= this.formdetails.value.foodtype;
    TicketbookingComponent.collectiveData.seattype= this.formdetails.value.seattype;
  }
  
}
