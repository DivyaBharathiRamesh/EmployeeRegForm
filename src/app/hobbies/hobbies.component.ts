import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<HobbiesComponent>) { }
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
    console.log(this.dataArray);
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
