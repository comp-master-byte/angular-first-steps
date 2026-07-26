import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ModalService } from '../../services/modal';
import { ClickStopPropagation } from '../../directives/click-stop-propagation';

@Component({
  selector: 'app-modal',
  imports: [UpperCasePipe, ClickStopPropagation],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  @Input() title: string;

  constructor(public modalService: ModalService) {}
}
