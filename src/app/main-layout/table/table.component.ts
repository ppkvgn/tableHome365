import {Component, Input} from '@angular/core';
import {TableDataInterface} from "../table-data.interface";



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input()
  dataSource: any

  displayedColumns: string[] = ['position', 'name', 'status', 'weight', 'symbol', 'ownerStatus'];
  clickedRows = new Set<TableDataInterface>();




}
