import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/shared/interfaces/customer';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent implements OnInit {
  @Input() customers!: Customer[];
  @Output() customerSelected = new EventEmitter();
  @Output() customerDetailsView = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}
}
