import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Address from './models/api';
import Addre from './models/postapi';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  readonly root_url;
  constructor(private http:HttpClient) {
    this.root_url="https://api.postalpincode.in/pincode"
   }

  getdata(PINCODE:number) 
  {return this.http.get<Addre[]>(`${this.root_url}/${PINCODE}`)
}
}
