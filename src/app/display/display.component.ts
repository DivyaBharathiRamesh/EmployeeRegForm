import { Component, OnInit } from '@angular/core';
import { EmpformService } from '../service/eform.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(public service: EmpformService) { }
  isHidden = false;

  data=[];
  fname = this.service.allData['fname'];
  lname = this.service.allData['lname'];
  gender =  this.service.allData['gender'];
  url = this.service.allData['img'];
  state = this.service.allData['state'];
  country = this.service.allData['country'];
  zip = this.service.allData['zip'];
  dob = this.service.allData['dob'];
  hobby = this.service.hobbies;
  extra = this.service.extra;

  displayedColumns: string[] = ['qualification', 'year', 'percentage'];

  ngOnInit(): void {
  }

}
