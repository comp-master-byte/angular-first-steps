import { Component } from '@angular/core';
import { GlobalError } from './components/global-error/global-error';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './components/navigation/navigation';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    GlobalError,
    RouterOutlet,
    Navigation,
  ]
})
export class App {
  
}
