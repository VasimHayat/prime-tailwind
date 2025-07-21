import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
 selector: 'app-sidebar',
 templateUrl: './app.sidebar.component.html',
 standalone: true,
 imports:[CommonModule]
})
export class AppSidebarComponent {
    constructor(private router:Router){}
 sidebarItems = [
  {
    name: 'Dashboard',
    icon: 'pi pi-th-large',
    route: '/dashboard',
    description: 'View overall system summary',
    isActive: true
  },
  {
    name: 'Orders',
    icon: 'pi pi-calendar',
    route: '/orders',
    description: 'Manage customer orders',
    isActive: false
  },
  {
    name: 'Quotes',
    icon: 'pi pi-users',
    route: '/quotes',
    description: 'Handle client quotes and estimates',
    isActive: false
  },
  {
    name: 'Products',
    icon: 'pi pi-shopping-cart',
    route: '/products',
    description: 'Browse and manage products',
    isActive: false
  },
  {
    name: 'Services',
    icon: 'pi pi-briefcase',
    route: '/services',
    description: 'Manage available services',
    isActive: false
  },
  {
    name: 'Employees',
    icon: 'pi pi-id-card',
    route: '/employees',
    description: 'Staff profiles and information',
    isActive: false
  },
  {
    name: 'Reports',
    icon: 'pi pi-chart-bar',
    route: '/reports',
    description: 'Data analytics and performance',
    isActive: false
  },
  {
    name: 'Setting',
    icon: 'pi pi-cog',
    route: '/settings',
    description: 'Application configuration',
    isActive: false
  }
];

onNavItemClick(item: any) {    
 this.sidebarItems.forEach(i => i.isActive =  i.name === item.name);
 this.router.navigateByUrl(item.route);
}

}