import { Component } from '@angular/core';
import { ErrorService } from '../../services/ErrorService';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-global-error',
  imports: [
    CommonModule,
    AsyncPipe
  ],
  templateUrl: './global-error.html',
  styleUrl: './global-error.scss',
})
export class GlobalError {
  constructor(public errorService: ErrorService) {}
}
