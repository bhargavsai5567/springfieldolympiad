import { Component } from '@angular/core';
import PriceList from '../models/pricelisting';
@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
 
  constructor()
  {
  }
  pricelist:PriceList[]=[{id:"Any One",price:249,op:300,data:"Participate in any one of the four Olympiads of your choice"},
                          {id:"Any Two",price:449,op:600,data:"Participate in any one of the four Olympiads of your choice"},
                          {id:"Any Three",price:649,op:900,data:"Participate in any one of the four Olympiads of your choice"},
                          {id:"All",price:839,op:1200,data:"Participate in any one of the four Olympiads of your choice"}];
   
  
}
