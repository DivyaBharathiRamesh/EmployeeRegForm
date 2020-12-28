import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EmpformService } from "../service/eform.service";

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<HobbiesComponent>,public service: EmpformService) { }
  dataArray =[];
  hobby: string;
  hobbies=[
    {id:"1", hobby:"Listening Music"},
    {id:"2", hobby:"Calligraphy"},
    {id:"3", hobby:"Reading Books"},
    {id:"4", hobby:"Photography"},
  ]
  onChecked(e)
  {
    this.dataArray.push(e);
  }
  onClose(): void {
    this.dialogRef.close();
  }
  saveHobby()
  {
    this.service.allData.push(this.dataArray);
    this.service.hobbies=this.dataArray;
    //console.log(this.dataArray);
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
