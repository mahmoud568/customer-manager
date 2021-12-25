import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/interfaces/customer';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  @Input() customer!: Customer;

  constructor() {}

  ngOnInit(): void {}
}
