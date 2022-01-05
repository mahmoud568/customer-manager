import { AgmMap } from '@agm/core';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NgbdModalConfirmComponent } from 'src/app/shared/components/ngbd-modal-confirm/ngbd-modal-confirm.component';
import { Customer } from 'src/app/shared/interfaces/customer';
import { Location } from 'src/app/shared/interfaces/map';
import { CustomersService } from '../../../service/customers.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss'],
})
export class NewCustomerComponent implements OnInit {
  @Output() CancelEditing = new EventEmitter();
  @ViewChild('map', { static: false }) myMap!: AgmMap;
  // used for change map location
  // to check on them before submiting
  latitude!: number;
  longitude!: number;
  location: Location = {
    latitude: 33.57786,
    longitude: -101.85517,
    zoom: 3,
    isFullScreen: true,
    markers: [
      {
        lat: 25,
        lng: -89,
      },
    ],
  };
  customer: Customer = {
    id: 0,
    name: {
      firstName: '',
      lastName: '',
    },
    gender: '',
    address: {
      streetAddress: '',
      cityName: '',
      state: '',
    },
    location: {
      latitude: 25,
      longitude: -89,
    },
    email: '',
    totalPayment: 0,
  };
  ngModalConfig: NgbModalOptions = {
    centered: true,
    backdrop: 'static',
    keyboard: false,
  };
  isLoading!: boolean;
  constructor(
    private customersService: CustomersService,
    private toastr: ToastrService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  onAddNewCustomer(f: NgForm) {
    this.customer.address.streetAddress = f.value.address;
    this.customer.address.cityName = f.value.city;
    this.customer.address.state = f.value.state;
    this.customer.name.firstName = f.value.firstName;
    this.customer.name.lastName = f.value.lastName;
    this.customer.email = f.value.email;
    this.customer.gender = f.value.gender == 1 ? 'male' : 'female';
    if (!(this.latitude && this.longitude)) {
      this.toastr.error(
        'please move map pin or move the map center to customer location'
      );
    } else {
      this.customer.location.latitude = this.latitude;
      this.customer.location.longitude = this.longitude;

      // using ngbootstrap open confirm modal and send customer data and action to it
      const modalRef = this.modalService.open(
        NgbdModalConfirmComponent,
        this.ngModalConfig
      );
      modalRef.componentInstance.customer = this.customer;
      modalRef.componentInstance.action = 'add';
      // on closing the modal
      modalRef.result.then((res) => {
        this.isLoading = true;
        if (res === 'ok') {
          this.customersService
            .addCustomer(this.customer)
            .subscribe((res: any) => {
              if (res.success == 'success') this.CancelEditing.emit();
              else
                this.toastr.error(
                  'seomthing gone wrong please connect with technical team'
                );
            });
        }
        this.isLoading = false;
      });
    }
  }
  mapClicked(event: any) {
    this.toastr.warning(
      'if you need to change customer location please drag the marker or the map'
    );
  }

  markerDrag(event: any) {
    // change customer location and change map location and rest map center
    this.latitude = event.latLng.lat();
    this.longitude = event.latLng.lng();
    this.myMap.latitude = this.latitude;
    this.myMap.longitude = this.longitude;
    //@ts-ignore
    this.myMap._setCenter();
  }

  mapCenterChange(event: any) {
    // change customer location and change map location and change marker place with map center
    this.latitude = event.lat;
    this.longitude = event.lng;
    this.myMap.latitude = this.latitude;
    this.myMap.longitude = this.longitude;
    //@ts-ignore
    this.location.markers[0].lat = this.latitude;
    //@ts-ignore
    this.location.markers[0].lng = this.longitude;
  }
}
