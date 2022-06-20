import { Component, OnInit } from '@angular/core';
import {TableDataInterface} from "./table-data.interface";
import {MatTableDataSource} from "@angular/material/table";

const ELEMENT_DATA: TableDataInterface[] = [
  {position: 1, name: 'Hydrogen', status: 'open', weight: 1.0079, symbol: 'H', ownerStatus: 'VACANT'},
  {position: 2, name: 'Helium',status: 'VACANT', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', status: 'open', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium',status: 'open', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron',status: 'OCCUPIED', weight: 10.811, symbol: 'B', ownerStatus: 'VACANT'},
  {position: 6, name: 'Carbon',status: 'open', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen',status: 'VACANT', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen',status: 'OCCUPIED', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine',status: 'open', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', status: 'open',weight: 20.1797, symbol: 'Ne', ownerStatus: 'VACANT'},
  {position: 11, name: 'Hydrogen', status: 'open', weight: 1.0079, symbol: 'H'},
  {position: 12, name: 'Helium',status: 'OCCUPIED', weight: 4.0026, symbol: 'He'},
  {position: 13, name: 'Lithium', status: 'open', weight: 6.941, symbol: 'Li'},
  {position: 14, name: 'Beryllium',status: 'open', weight: 9.0122, symbol: 'Be'},
  {position: 15, name: 'Boron',status: 'open', weight: 10.811, symbol: 'B'},
  {position: 16, name: 'Carbon',status: 'open', weight: 12.0107, symbol: 'C'},
  {position: 17, name: 'Nitrogen',status: 'open', weight: 14.0067, symbol: 'N'},
  {position: 18, name: 'Oxygen',status: 'open', weight: 15.9994, symbol: 'O'},
  {position: 19, name: 'Fluorine',status: 'open', weight: 18.9984, symbol: 'F'},
  {position: 20, name: 'Neon', status: 'VACANT',weight: 20.1797, symbol: 'Ne', ownerStatus: 'VACANT'}
];

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  dataSource = new MatTableDataSource<TableDataInterface>(ELEMENT_DATA);
  constructor() { }

  ngOnInit(): void {
  }

}
