export class EOOrder implements Order { 
    amountDue: number;
    totalAmount: number;
    customerLName: string;
    orderId: number;
    destination: string;
    orderStatus: string;
    customerFName: string;
    orderedDate: string;
    time: string;
    source: string;
    paymentStatus: string;
    eventDate: string;

     constructor(ord:any) {
        this.amountDue = ord.amountDue;
        this.totalAmount = ord.totalAmount;
        this.customerLName = ord.customerLName;
        this.orderId = ord.orderId;
        this.destination = ord.destination;
        this.orderStatus = ord.orderStatus;
        this.customerFName = ord.customerFName;
        this.orderedDate = ord.orderedDate;
        this.time = ord.time;
        this.source = ord.source;
        this.paymentStatus = ord.paymentStatus;
        this.eventDate = ord.eventDate;
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
    orderedDate: string;
    time: string;
    source: string;
    paymentStatus: string;
    eventDate: string;
}