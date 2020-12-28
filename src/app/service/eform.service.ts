import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Details {
  qualification: string;
  year: string;
  percentage: string;
}
const Data: Details[] = [
];
@Injectable({
  providedIn: 'root'
})
export class EmpformService {
  id = null;
  academics=[
    {id:"1", grade:"Grade-10"},
    {id:"2", grade:"Grade-12"},
    {id:"3", grade:"Under Graduate"},
    {id:"4", grade:"Post Graduate"},
  ]
  dataSource = new MatTableDataSource(Data);
  allData = [];
  extra =[];
  hobbies = [];
  
  public imgurl ;
  value: any;
  shareId() {
    return this.id;
  }
  setId(index) {
    this.id = index;
  }
}

