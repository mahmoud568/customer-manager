import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent implements OnInit {
  @Input() customers: any;
  constructor(private service: CustomersService) {}
  ngOnInit(): void {}
}
