import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpformComponent } from './empform/empform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import { MatFileUploadModule } from "mat-file-upload";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from '@angular/material/dialog';
import { AcademicsComponent } from './academics/academics.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EmpformService } from '../app/service/eform.service';
import { MatListModule } from '@angular/material/list';
import { ExtraComponent } from './extra/extra.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpformComponent,
    AcademicsComponent,
    HobbiesComponent,
    ExtraComponent,
  ],
  imports: [
    BrowserModule,MatFileUploadModule, MatToolbarModule, MatSelectModule,
    AppRoutingModule,MatNativeDateModule, MatDialogModule, MatIconModule,
    BrowserAnimationsModule,MatDatepickerModule, MatTableModule,MatCheckboxModule,
    ReactiveFormsModule,FormsModule, MatRadioModule,MatCardModule, MatListModule,
    MatFormFieldModule, MatInputModule, MatButtonModule
  ],
  entryComponents: [AcademicsComponent,HobbiesComponent],
  providers: [EmpformService],
  bootstrap: [AppComponent]
})
export class AppModule { }
