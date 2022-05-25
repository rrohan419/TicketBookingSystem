import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';
import { ViewAreaComponent } from './ticketbooking/view-area/view-area.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TicketPreviewComponent } from './ticketbooking/ticket-preview/ticket-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { DataComponent } from './data/data.component';
import { ErrorPageComponent } from './error-page/error-page.component';


const routes: Routes=[
  {path : '', redirectTo:'home',pathMatch:'full'},
  {path: 'home', component: WelcomeComponent},
  {path: 'bookingdetails', component: ViewAreaComponent },
  {path: 'booking', component:TicketbookingComponent},
  {path: 'ticket', component:TicketPreviewComponent},
  {path: 'allTickets', component:DataComponent},
  {path: '**', component: ErrorPageComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TicketbookingComponent,
    ViewAreaComponent,
    TicketPreviewComponent,
    DataComponent,
    ErrorPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
