import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from '../../interfaces/customer';

@Component({
  selector: 'ngbd-modal-confirm',
  templateUrl: './ngbd-modal-confirm.component.html',
  styleUrls: ['./ngbd-modal-confirm.component.scss'],
})
export class NgbdModalConfirmComponent implements OnInit {
  @Input() customer!: Customer;
  @Input() action!: string;

  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}
}
