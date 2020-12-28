import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from "./display/display.component";
import { EmpformComponent } from "./empform/empform.component";

const routes: Routes = [
  {path:"display",component:DisplayComponent},
  {path:"",component:EmpformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
