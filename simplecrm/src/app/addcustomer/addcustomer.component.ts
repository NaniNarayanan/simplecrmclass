import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss']
})
export class AddcustomerComponent implements OnInit {
  firstname:string='';
  u:any;
  constructor(private uService:UsersService){}


  ngOnInit(): void {
    this.uService.getusers().subscribe(data=>{this.u=data;})
  }

}
