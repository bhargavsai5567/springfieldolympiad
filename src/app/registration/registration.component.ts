import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import Address from '../models/api';
import Addre from '../models/postapi';
import { FormControl,FormGroup,Validators,FormsModule,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  pin: string='' ; 
  city:string='hyd';
  data:any;
  addre:Addre[]=[{Message:'hello every',PostOffice:[{ Name:"good morning",Description:'',BranchType:'',DeliveryStatus:'',Circle:'',District:'',
  Division:'',
 Region:'',
  State:'',Country:''}],Status:''}];


  constructor(private as:ApicallService)
  {


  }
  RegistrationForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    phone:new FormControl(null,Validators.required),
    username:new FormControl(null,Validators.required),
    country:new FormControl(null,Validators.required),
    pin:new FormControl(null,Validators.required),
    city:new FormControl(null,Validators.required),
    state:new FormControl(null,Validators.required)
  });
  ngOnInit():void{
  
}
getdata()
  {
    var num= this.pin.toString().length;
    console.log(num);
    if(num>1){
      var pan = Number(this.pin);
      this.as.getdata(pan)
      .subscribe((address:Addre[])=>{this.addre=address;
        /* console.log(this.addre); */
        this.RegistrationForm.patchValue({
          city:this.addre[0].PostOffice[0].Region,
          state:this.addre[0].PostOffice[0].State,
          country:this.addre[0].PostOffice[0].Country,
    
        });
      });
    }
     
  } 
 
  
}
