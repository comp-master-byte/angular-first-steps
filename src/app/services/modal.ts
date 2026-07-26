import { Service } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Service()
export class ModalService {
  isVisible$ = new BehaviorSubject<boolean>(false);

  open() {  
    this.isVisible$.next(true);
  }

  close() {
    this.isVisible$.next(false);
  }
}
