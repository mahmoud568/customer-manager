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

  isFirstNameSorted = false;
  isLastNameSorted = false;
  isAddressSorted = false;
  isCitySorted = false;
  isStateSorted = false;
  isOrderTotalSorted = false;
  constructor() {}

  ngOnInit(): void {
    this.customers = JSON.parse(JSON.stringify(this.customers));
  }

  onSortFirstName() {
    document.getElementById("first-name")!.classList.add('flip');
    setTimeout(() => {
      document.getElementById("first-name")!.classList.remove('flip');
    }, 500);
    if(this.isFirstNameSorted) {
      this.customers.sort((a, b) => (a.name.firstName < b.name.firstName) ? 1 : -1);
    } else {
      this.customers.sort((a, b) => (a.name.firstName > b.name.firstName) ? 1 : -1);
    }
    this.isFirstNameSorted = !this.isFirstNameSorted;
  }

  onSortLastName() {
    document.getElementById("last-name")!.classList.add('flip');
    setTimeout(() => {
      document.getElementById("last-name")!.classList.remove('flip');
    }, 500);
    if(this.isLastNameSorted) {
      this.customers.sort((a, b) => (a.name.lastName < b.name.lastName) ? 1 : -1);
    } else {
      this.customers.sort((a, b) => (a.name.lastName > b.name.lastName) ? 1 : -1);
    }
    this.isLastNameSorted = !this.isLastNameSorted;

  }

  onSortAddress() {
    document.getElementById("address")!.classList.add('flip');
    setTimeout(() => {
      document.getElementById("address")!.classList.remove('flip');
    }, 500);
    if(this.isAddressSorted) {
      this.customers.sort((a, b) => (a.address.streetAddress < b.address.streetAddress) ? 1 : -1);
    } else {
      this.customers.sort((a, b) => (a.address.streetAddress > b.address.streetAddress) ? 1 : -1);
    }
    this.isAddressSorted = !this.isAddressSorted;
  }

  onSortCity() {
    document.getElementById("city")!.classList.add('flip');
    setTimeout(() => {
      document.getElementById("city")!.classList.remove('flip');
    }, 500);
    if(this.isCitySorted) {
      this.customers.sort((a, b) => (a.address.cityName < b.address.cityName ) ? 1 : -1);
    } else {
      this.customers.sort((a, b) => (a.address.cityName  > b.address.cityName ) ? 1 : -1);
    }
    this.isCitySorted = !this.isCitySorted;
  }

  onSortState() {
    document.getElementById("state")!.classList.add('flip');
    setTimeout(() => {
      document.getElementById("state")!.classList.remove('flip');
    }, 500);
    if(this.isStateSorted) {
      this.customers.sort((a, b) => (a.address.state < b.address.state) ? 1 : -1);
    } else {
      this.customers.sort((a, b) => (a.address.state > b.address.state) ? 1 : -1);
    }
    this.isStateSorted = !this.isStateSorted;
  }

  onSortOrderTotal() {
    document.getElementById("order-total")!.classList.add('flip');
    setTimeout(() => {
      document.getElementById("order-total")!.classList.remove('flip');
    }, 500);
    if(this.isOrderTotalSorted) {
      this.customers.sort((a, b) => (a.totalPayment < b.totalPayment) ? 1 : -1);
    } else {
      this.customers.sort((a, b) => (a.totalPayment > b.totalPayment) ? 1 : -1);
    }
    this.isOrderTotalSorted = !this.isOrderTotalSorted;
  }
}
