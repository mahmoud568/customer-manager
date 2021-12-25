import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/interfaces/customer';

@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.scss'],
})
export class CustomerInformationComponent implements OnInit {
  @Input() selectedView!: string;
  @Input() customer!: Customer;
  constructor() {}

  ngOnInit(): void {}

  selectView(view: string) {
    this.selectedView = view;
  }
}
