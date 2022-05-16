import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';
import { ViewAreaComponent } from './ticketbooking/view-area/view-area.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TicketPreviewComponent } from './ticketbooking/ticket-preview/ticket-preview.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes=[
  {path: '', component: WelcomeComponent},
  {path: 'bookingdetails', component: ViewAreaComponent },
  {path: 'booking', component:TicketbookingComponent},
  {path: 'ticket', component:TicketPreviewComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TicketbookingComponent,
    ViewAreaComponent,
    TicketPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
