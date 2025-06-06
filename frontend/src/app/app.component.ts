import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/partails/header/header.component';
import { HomeComponent } from "./components/pages/home/home.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
