import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.scss'],
})
export class CustomerInformationComponent implements OnInit {
  selectedView: string = 'details';
  @Input() customer: any;
  constructor() {}

  ngOnInit(): void {}

  selectView(view: string) {
    this.selectedView = view;
  }
}
