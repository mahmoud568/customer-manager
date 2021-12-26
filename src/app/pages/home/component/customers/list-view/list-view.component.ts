import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/shared/interfaces/customer';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {
  @Input() customers!: Customer[];
  @Output() customerSelected = new EventEmitter();
  @Output() customerDetailsView = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log(this.customers);
  }
}
