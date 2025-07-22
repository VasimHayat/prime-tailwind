import { Routes } from '@angular/router';
import { AppDashboardComponent } from './main/dashboard/app.dashboard.component';
import { AppOrdersComponent } from './main/orders/app.orders.component';
import { AppProductsComponent } from './main/products/app.products.component';

export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path:'dashboard',component:AppDashboardComponent, title: 'Dashboard'},
    {path:'orders',component:AppOrdersComponent, title: 'Orders'},
    {path:'products',component:AppProductsComponent, title: 'Products'},
];
