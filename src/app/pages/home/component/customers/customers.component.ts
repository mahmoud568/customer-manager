import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  @Input() customers: any;
  @Output() customerSelected = new EventEmitter();
  selectedView: string = 'card';
  constructor() {}

  ngOnInit(): void {}

  selectView(view: string) {
    this.selectedView = view;
  }
}
