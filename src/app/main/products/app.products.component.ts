import { Component, ViewEncapsulation } from "@angular/core";
import { AgPrimeTable } from "./table/ag.prime.table";
import { AppDataService } from "../../services/app.data.service";
import { Order } from "../../models/app.order.model";

@Component({
    templateUrl:'app.products.component.html',
    styleUrls:['app.products.component.scss'],
    standalone: true,
    imports:[AgPrimeTable]
})
export class AppProductsComponent {
  cols = [
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
    orderList: Order[] = [];

      constructor(
        private dataService: AppDataService, 
      ) {

      }

    ngOnInit() {
    this.orderList = this.dataService.orderArray; 
  }
}