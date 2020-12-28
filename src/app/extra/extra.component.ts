import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EmpformService } from '../service/eform.service';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ExtraComponent>,public service: EmpformService) { }

  dataEArray =[];
  extra: string;
  extras=[
    {id:"1", extra:"Volunteer Works"},
    {id:"2", extra:"Sports & Athletics"},
    {id:"3", extra:"Arts & Crafts"},
    {id:"4", extra:"Culture Clubs"}
  ]
  onChecked(e)
  {
    this.dataEArray.push(e);
  }
  onClose(): void {
    this.dialogRef.close();
  }
  saveCurricular()
  {
    this.service.allData.push(this.dataEArray);
    this.service.extra=this.dataEArray;

    //console.log(this.dataEArray);
    this.dialogRef.close();
  }
  
  ngOnInit(): void {
  }
}
