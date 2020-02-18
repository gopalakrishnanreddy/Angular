import { Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BaseDataTableComponent } from './basetable';

@Component({
    selector: 'app-customer-table'
})
export class CustomerTableComponent extends BaseDataTableComponent implements OnInit {

    constructor() {
        super();
        for (let i = 1; i <= 100; i++) {
            customers.push({'id' : i, 'name': 'Krish' + i, 'progress': Math.round(Math.random() * 100).toString(),'color': COLORS[Math.round(Math.random() * (COLORS.length - 1))]});
        }
    }

    ngOnInit() {
        super.ngOnInit();
        this.columnsToDisplay = ['id', 'name', 'progress', 'color'];        
        this.rows = customers;
    }
}
  const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];

  const customers: Customers[] = [];

  export interface Customers {
      id: number;
      name: string;
      progress: string;
      color: string;
    }