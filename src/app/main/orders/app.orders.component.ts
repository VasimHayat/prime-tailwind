import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule,Table } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { Tag } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';


import { AppDataService } from '../../services/app.data.service';
import { Order } from '../../models/app.order.model';
import { FormsModule } from '@angular/forms';

interface Column {
  field: string;
  header: string;
  filter: string;
}

@Component({
  standalone: true,
  templateUrl: './app.orders.component.html',
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    CheckboxModule,
    MultiSelectModule,
    InputTextModule,
    IconField,
    InputIcon,
    Tag,
    ButtonModule,
  ],
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .p-datatable-filter-overlay {
        padding: 10px;
      }
    `,
  ],
})
export class AppOrdersComponent implements OnInit {
  constructor(
    private dataService: AppDataService,
    private cd: ChangeDetectorRef
  ) {
    this.cols = [
      { field: 'customerFName', header: 'Customer', filter: 'text' },
      { field: 'orderedDate', header: 'Order Date', filter: 'date' },
      { field: 'eventDate', header: 'Event Date', filter: 'date' },
      { field: 'source', header: 'Source Channel', filter: 'text' },
      { field: 'destination', header: 'Destination', filter: 'text' },
      { field: 'totalAmount', header: 'Total Amount', filter: 'numeric' },
      { field: 'amountDue', header: 'Due Amount', filter: 'numeric' },
      { field: 'paymentStatus', header: 'Payment Status', filter: 'text' },
      { field: 'orderStatus', header: 'Order Status', filter: 'text' },
    ];
    this.selectedColumns = this.cols;
  }
  orderList: Array<Order> = [];
  cols!: Column[];
  isLoadingDone = false;
  selectedColumns!: Column[];
  searchTerm = '';

@ViewChild('dt') dt1!: Table;

  ngOnInit() {
    this.orderList = this.dataService.orderArray;
    this.isLoadingDone = true;
  }

  getSeverity(status: string) {
    if (status == 'PAID' || status == 'ACCEPTED') {
      return 'success';
    } else if (status == 'UNPAID' || status == 'CREATED') {
      return 'danger';
    } else if (status == 'CANCELLED' || 'PICKUP') {
      return 'warn';
    } else {
      return 'info';
    }
  }

  clear(dt: any) {
    dt.clear();
    this.selectedColumns = this.cols;
    this.searchTerm = '';
  } 
 
 
}
