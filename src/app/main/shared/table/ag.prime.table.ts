import { Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList, TemplateRef, ViewChild, ViewEncapsulation } from "@angular/core";
import { Table,TableModule } from "primeng/table";
import { MultiSelect, MultiSelectModule } from "primeng/multiselect";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { IconField } from "primeng/iconfield";
import { InputIcon } from "primeng/inputicon";
import { Tag } from "primeng/tag"; 
import { InputTextModule } from "primeng/inputtext";
import { Column } from "./ag.prime.table.meta";
import { AgPrimeTableColDirective } from "./ag.prime.table.col";

 

@Component({
    selector:'ag-prime-table',
    templateUrl:'ag.prime.table.html',   
    encapsulation:ViewEncapsulation.None,
    standalone: true,
    imports: [ CommonModule,
        FormsModule,
        TableModule, 
        MultiSelectModule,
        InputTextModule,
        IconField,
        InputIcon,
        Tag,
        ButtonModule,],
      
      styles:[
        `
         .p-datatable-filter-overlay{
                padding: 10px;
        }
 `
      ]
})
export class AgPrimeTable implements OnInit{
  @Input() data: any[] = [];
  @Input() columns: Column[] = []; 
  @Input() rows: number = 10;   
  @Input() globalFilterFields: string[] = [];
  @Input() showCheckboxes = true;

  @Output() onLazyLoad = new EventEmitter<any>();
  @Output() selectionChange = new EventEmitter<any>();
  @ViewChild('dt') dt!: Table;

  @ContentChildren(AgPrimeTableColDirective)
  columnTemplates!: QueryList<AgPrimeTableColDirective>;
  colTemplateMap: { [key: string]: TemplateRef<any> } = {};

  selectedColumns:Column[] = [];
  totalRecords: number = 0;

  ngOnInit(): void {
    this.totalRecords = this.data.length;
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

  ngAfterContentInit(): void {
    this.colTemplateMap = this.columnTemplates.reduce((acc, dir) => {
      acc[dir.columnKey] = dir.template;
      return acc;
    }, {} as { [key: string]: TemplateRef<any> });
  }

  onHeaderCheckboxToggle(event: any) {
    //console.log('Selection changed:', event);
    // Handle selection change logic here
  }
  onSelectionChange(event:any){ 
     this.selectionChange.emit(event); 
  }
}