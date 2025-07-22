export class EOOrder implements Order { 
    amountDue: number;
    totalAmount: number;
    customerLName: string;
    orderId: number;
    destination: string;
    orderStatus: string;
    customerFName: string; 
    time: string |Date;
    source: string;
    paymentStatus: string;
    eventDate: string |Date;
    orderedDate: string|Date;

     constructor(ord:any) {
        this.amountDue = ord.amountDue;
        this.totalAmount = ord.totalAmount;
        this.customerLName = ord.customerLName;
        this.orderId = ord.orderId;
        this.destination = ord.destination;
        this.orderStatus = ord.orderStatus;
        this.customerFName = ord.customerFName;
        this.orderedDate = new Date(ord.orderedDate);
        this.time = new Date(ord.time);
        // this.orderedDate = ord.orderedDate;
        // this.time = ord.time;
        this.source = ord.source;
        this.paymentStatus = ord.paymentStatus;
        this.eventDate = new Date(ord.eventDate);
    }
}

export interface Order {
    amountDue: number;
    totalAmount: number;
    customerLName: string;
    orderId: number;
    destination: string;
    orderStatus: string;
    customerFName: string;
    orderedDate: string | Date;
    time: string | Date;
    source: string;
    paymentStatus: string;
    eventDate: string | Date;
}