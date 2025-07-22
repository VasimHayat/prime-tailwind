import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from "@angular/core";
import { Table,TableModule } from "primeng/table";
import { MultiSelect, MultiSelectModule } from "primeng/multiselect";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { IconField } from "primeng/iconfield";
import { InputIcon } from "primeng/inputicon";
import { Tag } from "primeng/tag";
import { CheckboxModule } from "primeng/checkbox";
import { InputTextModule } from "primeng/inputtext";

interface Column {
  field: string;
  header: string;
  filter: string;
}

@Component({
    selector:'ag-prime-table',
    templateUrl:'ag.prime.table.html',
    styleUrls:['ag.prime.table.scss'],    
    encapsulation:ViewEncapsulation.None,
    standalone: true,
    imports: [ CommonModule,
        FormsModule,
        TableModule,
        CheckboxModule,
        MultiSelectModule,
        InputTextModule,
        IconField,
        InputIcon,
        Tag,
        ButtonModule,]
})
export class AgPrimeTable implements OnInit{
  @Input() data: any[] = [];
  @Input() columns: Column[] = []; 
  @Input() rows: number = 10;
  @Input() totalRecords: number = 0;
  @Input() loading: boolean = false;
  @Input() globalFilterFields: string[] = [];
  @Input() showCheckboxes = true;

  @Output() onLazyLoad = new EventEmitter<any>();
  @Output() onRowSelect = new EventEmitter<any>();

  @ViewChild('dt') dt!: Table;
  selectedColumns:Column[] = [];

  ngOnInit(): void {
    if (!this.columns || this.columns.length === 0) {
      console.warn('No columns provided for AgPrimeTable');
    }else{
         this.selectedColumns = this.columns;
    }
    
  }
  

  searchTerm = '';

  clearFilters() {
    this.searchTerm = '';
    this.dt.clear();
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
}