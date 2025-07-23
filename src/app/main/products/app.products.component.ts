import { Component, ViewEncapsulation } from "@angular/core";
import { AgPrimeTable } from "../shared/table/ag.prime.table";
import { AppDataService } from "../../services/app.data.service";
import { Order } from "../../models/app.order.model";
import { Column } from "../shared/table/ag.prime.table.meta";
import { AgPrimeTableColDirective } from "../shared/table/ag.prime.table.col";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
    templateUrl:'app.products.component.html',
    styleUrls:['app.products.component.scss'],
    standalone: true,
    imports:[AgPrimeTable,AgPrimeTableColDirective,FormsModule,CommonModule]
})
export class AppProductsComponent {
  cols:Column[] = [
      { field: 'orderId', header: 'Order ID', filter: 'text',type: 'text',isFrozen:true },
      { field: 'customerLName', header: 'Customer Last Name', filter: 'text',type: 'text' },
      { field: 'customerFName', header: 'Customer', filter: 'text',type: 'text'  },
      { field: 'orderedDate', header: 'Order Date', filter: 'date',type: 'date' },
      { field: 'eventDate', header: 'Event Date', filter: 'date' ,type: 'date'},
      { field: 'source', header: 'Source Channel', filter: 'text' ,type: 'text'},
      { field: 'destination', header: 'Destination', filter: 'text' ,type: 'text',isCustomTpl:true},
      { field: 'totalAmount', header: 'Total Amount', filter: 'numeric' ,type: 'numeric',isCurrency: true},
      { field: 'amountDue', header: 'Due Amount', filter: 'numeric' ,type: 'numeric', isCurrency:true},
      { field: 'paymentStatus', header: 'Payment Status', filter: 'text',type: 'text',isTag:true },
      { field: 'orderStatus', header: 'Order Status', filter: 'text' ,type: 'text',isTag:true},
    ];
    orderList: Order[] = [];

      constructor(
        private dataService: AppDataService, 
      ) {

      }

    ngOnInit() {
    this.orderList = this.dataService.orderArray; 
  }
  selectionChange(event: any) {
    console.log('Selection changed:', event);
    // Handle selection change logic here
  }
}