import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AppHeaderComponent } from './main/header/app.header.component';
import { AppSidebarComponent } from './main/sidebar/app.sidebar.component';

const IMPORT_COMPONENTS= [AppHeaderComponent,AppSidebarComponent];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ButtonModule,...IMPORT_COMPONENTS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prime-tailwind';
}
