import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Seats } from '../seats';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.API_URL;

  constructor(private http:HttpClient) { }

  getSeats(url:any) : Observable<Seats[]>
  {
    return this.http.get<Seats[]>(this.apiUrl+url);
  }
  updateSeats(url:any , seatNumber:any) : Observable<Seats>
  {
    return this.http.put<Seats>(this.apiUrl+url,seatNumber);
  }
  deleteSeats(id:number) :Observable<Seats>
  {
    console.log('pass');
    return this.http.delete<Seats>(this.apiUrl+'seat/'+id);
  }
  searchSeats(url:any , id:number)
  {
    return this.http.get(this.apiUrl+url+id);
  }
  addMovie(url:any, movieName:any )
  {
      return this.http.post((this.apiUrl+url),movieName);
  }
}

