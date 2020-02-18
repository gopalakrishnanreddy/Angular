import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-datatable.base',
  templateUrl: `basetable.html`,
  styleUrls: ['basetable.css']
})

export class BaseDataTableComponent implements OnInit, AfterViewInit {
  rows: Array<any> = [];
  columnsToDisplay: Array<any> = [];
  requestJSON: string;
  dataSource: MatTableDataSource<any>;

  //@ViewChild(MatPaginator) paginator: MatPaginator;
  //@ViewChild(MatSort) sort: MatSort;
  paginator: MatPaginator;
  sort: MatSort;


  constructor() {
    this.dataSource = new MatTableDataSource(this.rows);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}


