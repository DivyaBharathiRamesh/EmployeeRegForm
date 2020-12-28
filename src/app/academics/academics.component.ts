import { Component,Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { EmpformService } from "../service/eform.service";
import { YearValidator,PercentageValidator } from "../utils/validators";

@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css']
})
export class AcademicsComponent implements OnInit {
  index: any;
  data: any;
  dform: FormGroup;
  
  
  initializeDFormGroup(){
    this.dform.setValue({
      qualification : '1',
      year : '',
      percentage : ''
    });
  }
  constructor(public dialogRef: MatDialogRef<AcademicsComponent>,public service: EmpformService) { 
  }
  
  academics=[
    "Grade-10",
    "Grade-12",
    "Under Graduate",
    "Post Graduate",
  ]
  cloneData=[];
  calibrateSelect(): void {
     this.cloneData=this.academics.slice(0); 
     this.service.dataSource.data.forEach(element => {
       const ind=this.cloneData.indexOf(element.qualification,0);
       if(ind>-1)
       {
          this.cloneData.splice(ind,1);
       }
    });
   }
  onClose(): void {
    this.dialogRef.close();
    //console.log(this.dform);
  }
  onSave(){
    if(this.dform.valid)
    {
      if(this.index!=null)
      {
        this.service.dataSource.data.splice(this.index,1,this.dform.value);

      }
      else{
        this.service.dataSource.data.push(this.dform.value);
      }
      this.service.dataSource._updateChangeSubscription();
      this.dialogRef.close();    
      //console.log(this.service.dataSource.data);
    }
  }
  onSet(){
  
  }
  get qualification(){
    return this.dform.get("qualification");
  }
  get year(){
    return this.dform.get("year");
  }
  get percentage(){
    return this.dform.get("percentage");
  }
  ngOnInit(){
    this.calibrateSelect();
    this.index=this.service.shareId();
    //console.log(this.index);
    if(this.index==null)
    {
      this.data= {qualification:null,year:null,percentage:null};
    }
    else
    {
      this.data= this.service.dataSource.data[this.index];
      this.cloneData.push(this.data.qualification);
    }
    this.dform = new FormGroup({
      qualification : new FormControl(this.data.qualification),
      year : new FormControl(this.data.year,YearValidator()),
      percentage : new FormControl(this.data.percentage,PercentageValidator())
    }); 
    this.service.setId(null);
  }
} 
