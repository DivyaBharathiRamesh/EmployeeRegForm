import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { AcademicsComponent } from '../academics/academics.component';
import  countryList  from "../../assets/countries.json";
import { HobbiesComponent } from '../hobbies/hobbies.component';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FirstNameValidator,LastNameValidator, PercentageValidator, YearValidator } from "../utils/validators";
import { EmpformService } from "../service/eform.service";
import { ExtraComponent } from '../extra/extra.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-empform',
  templateUrl: './empform.component.html',
  styleUrls: ['./empform.component.css']
})
export class EmpformComponent implements OnInit {
  len: any;
  

constructor(public dialog: MatDialog, public service: EmpformService, private router: Router) {  }
openDialog(): void {
  const dialogRef = this.dialog.open(AcademicsComponent, {
    height: '380px',
    width: '320px',
  });                     
}

openDialogBox(): void {
  const dialogRef = this.dialog.open(HobbiesComponent, {
    height: '380px',
    width: '320px',
  });
} 
onSelectFile(event): void {
  if(event.target.files && event.target.files[0])
  {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) => {
    this.service.imgurl=event.target.result;
    }
  }
}
openEDialog(): void {
  const dialogRef = this.dialog.open(ExtraComponent, {
    height: '380px',
    width: '320px',
  });                     
}

displayedColumns: string[] = ['qualification', 'year', 'percentage','actions'];
public imagePath;
countriesList = countryList.countries;
states = [];

  ngOnInit() {
  } 
  clearData(){
    this.form.reset();
    this.initializeFormGroup();
    this.len = this.service.dataSource.data.length;
    this.service.dataSource.data.splice(0,this.len);
    this.service.dataSource._updateChangeSubscription();
  }
  onSubmit(){
    this.service.allData=this.form.value;
    console.log(this.service.allData);
    this.router.navigate(["/display"]);
  }  
  onChange(e){
    this.countriesList.map((country)=>{
      if(country.country === this.form.value.country){
        this.states = country.states
      }
    })
  }
  doDelete(index){
    this.service.dataSource.data.splice(index,1);
    this.service.dataSource._updateChangeSubscription();
    if(this.service.dataSource.data.length==0)
    {
      this.service.setId(null);
    }
  }
  doEdit(i){
    this.service.setId(i);
    const dialogRef = this.dialog.open(AcademicsComponent);
  }

  form: FormGroup = new FormGroup({
    fname : new FormControl('',FirstNameValidator()),
    lname : new FormControl('',LastNameValidator()),
    gender : new FormControl('1'),
    dob : new FormControl(''),
    img : new FormControl(''),
    state : new FormControl(0),
    country : new FormControl(0),
    zip : new FormControl('',[Validators.required, Validators.minLength(6)])
    });
  
    initializeFormGroup(){
      this.form.setValue({
        fname : '',
        lname : '',
        gender : '1',
        dob : '',
        img : '',
        state : 0,
        country : 0,
        zip : ''  
      });
    }
    initializeDFormGroup(){
      this.dform.setValue({
        qualification : '1',
        year : '',
        percentage : ''
      });
    }
    dform: FormGroup = new FormGroup({
      qualification : new FormControl('',Validators.required),
      year : new FormControl('',[Validators.required,YearValidator()]),
      percentage : new FormControl('',[Validators.required,PercentageValidator()])
    });   
}
