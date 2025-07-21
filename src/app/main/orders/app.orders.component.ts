import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox'; 
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { Tag } from 'primeng/tag'; 


import { AppDataService } from "../../services/app.data.service";
import { Order } from "../../models/app.order.model";
import { FormsModule } from "@angular/forms";

interface Column {
    field: string;
    header: string;
}

@Component({ 
    standalone: true,
    templateUrl: './app.orders.component.html',
   imports: [CommonModule,FormsModule, TableModule, CheckboxModule,MultiSelectModule,InputTextModule,IconField,InputIcon,Tag],
})
export class AppOrdersComponent implements OnInit{ 

     

    constructor(private dataService: AppDataService,private cd: ChangeDetectorRef) {
        this.cols = [             
            { field: 'customerFName', header: 'Customer' },
            { field: 'orderedDate', header: 'Order Date' },
             { field: 'eventDate', header: 'Event Date' },
            { field: 'source', header: 'Source Channel' },
            { field: 'destination', header: 'Destination' },
             { field: 'totalAmount', header: 'Total Amount($)' },
            { field: 'amountDue', header: 'Due Amount($)' },
            { field: 'paymentStatus', header: 'Payment Status' },
            { field: 'orderStatus', header: 'Order Status' }        
        ];
        this.selectedColumns = this.cols;
    }
    orderList:Array<Order> = [];
    cols!: Column[];
    isLoadingDone =false;
    selectedColumns!: Column[];
    searchTerm = '';
    ngOnInit(){
        this.orderList = this.dataService.orderArray;
        this.isLoadingDone = true;
    }

      getSeverity(status: string) {
        if(status == "PAID" || status == "ACCEPTED") {
            return 'success';
        }else if(status == "UNPAID" || status == "CREATED") {
            return 'danger';
        }else if(status == "CANCELLED" ||"PICKUP") {
            return 'warn';
        }else{
            return "info"
        }
         
    }

//   orders = [
//     {
//       company: 'Johnson & Johnson',
//       logo: 'https://logo.clearbit.com/jnj.com',
//       categories: ['B2B', 'Marketplace', 'Technology'],
//       lastInteraction: '2 days ago',
//       domain: 'jnj.com',
//       phone: '+7 (848) 960-94-20'
//     },
//     {
//       company: 'Nike',
//       logo: 'https://logo.clearbit.com/nike.com',
//       categories: ['B2C', 'Marketplace', 'Technology'],
//       lastInteraction: '5 hours ago',
//       domain: 'nike.com',
//       phone: '+7 (850) 172-61-97'
//     },
//     {
//       company: 'Apple',
//       logo: 'https://logo.clearbit.com/apple.com',
//       categories: ['B2B', 'Technology'],
//       lastInteraction: '24 hours ago',
//       domain: 'apple.com',
//       phone: '+7 (926) 957-49-97'
//     },
//     {
//       company: 'Netflix',
//       logo: 'https://logo.clearbit.com/netflix.com',
//       categories: ['Technology'],
//       lastInteraction: 'No contact',
//       domain: 'netflix.com',
//       phone: '+7 (936) 834-82-31'
//     },
//     {
//       company: 'Google',
//       logo: 'https://logo.clearbit.com/google.com',
//       categories: ['B2B', 'Marketplace'],
//       lastInteraction: '5 days ago',
//       domain: 'google.com',
//       phone: '+7 (809) 510-45-80'
//     },
//     {
//       company: 'Tesla',
//       logo: 'https://logo.clearbit.com/tesla.com',
//       categories: ['B2C', 'Marketplace'],
//       lastInteraction: '2 days ago',
//       domain: 'tesla.com',
//       phone: '+7 (848) 960-94-20'
//     }
//   ];
}