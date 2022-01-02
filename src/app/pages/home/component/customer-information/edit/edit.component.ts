import { AgmMap } from '@agm/core';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/shared/interfaces/customer';
import { Location } from 'src/app/shared/interfaces/map';
import { SharedService } from 'src/app/shared/services/shared.service';
import { CustomersService } from '../../../service/customers.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  @Input() customer!: Customer;
  @Output() CancelEditing = new EventEmitter();
  @ViewChild('map', { static: false }) myMap!: AgmMap;

  // used for change map location
  // to check on them before submiting
  latitude!: number;
  longitude!: number;

  isLoading!: boolean;
  location: Location = {
    latitude: 33.57786,
    longitude: -101.85517,
    zoom: 3,
    isFullScreen: true,
  };

  constructor(
    private customersService: CustomersService,
    private toastr: ToastrService,
    private sharedService: SharedService
  ) {
    setTimeout(() => {
      // initializing map and change center pased on cutomer location
      this.location = {
        latitude: this.customer.location.latitude,
        longitude: this.customer.location.longitude,
        zoom: 3,
        isFullScreen: true,
        markers: [
          {
            lat: this.customer.location.latitude,
            lng: this.customer.location.longitude,
          },
        ],
      };
      this.myMap.latitude = Number(this.location.latitude);
      this.myMap.longitude = Number(this.location.longitude);
      this.location.zoom = 8;
      //@ts-ignore
      this.myMap._setCenter();
    }, 0);
  }

  ngOnInit(): void {}

  onUpdate(f: NgForm) {
    this.isLoading = true;
    let editedCustomer = this.customer;
    if (
      // check  if the data didnt change and didnt change pin location in map
      // then return trigger toaster with error message
      editedCustomer.address.streetAddress == f.value.address &&
      editedCustomer.address.cityName == f.value.city &&
      editedCustomer.address.state == f.value.state &&
      editedCustomer.name.firstName == f.value.firstName &&
      editedCustomer.name.lastName == f.value.lastName &&
      editedCustomer.email == f.value.email &&
      editedCustomer.gender == (f.value.gender == 1 ? 'male' : 'female') &&
      !(this.latitude && this.longitude)
    ) {
      this.isLoading = false;
      this.toastr.error(
        'you need to change customer data to submit!',
        'warning!'
      );
      return;
    } else {
      editedCustomer.address.streetAddress = f.value.address;
      editedCustomer.address.cityName = f.value.city;
      editedCustomer.address.state = f.value.state;
      editedCustomer.name.firstName = f.value.firstName;
      editedCustomer.name.lastName = f.value.lastName;
      editedCustomer.email = f.value.email;
      editedCustomer.gender = f.value.gender == 1 ? 'male' : 'female';
      // check if map pin change to take its value
      // othewise take default data
      if (this.latitude && this.longitude) {
        editedCustomer.location.latitude = this.latitude;
        editedCustomer.location.longitude = this.longitude;
      } else {
        editedCustomer.location.latitude = this.customer.location.latitude;
        editedCustomer.location.longitude = this.customer.location.longitude;
      }
      this.customersService
        .editCutomerByID(editedCustomer.id, editedCustomer)
        .subscribe((res: any) => {
          this.isLoading = false;
          if (res.status === 'success') {
            this.toastr.success(res.details, res.status);
            this.CancelEditing.emit();
          }
        });
    }
  }

  onDelete() {
    this.customersService
      .deleteCutomerByID(this.customer.id)
      .subscribe((res: any) => {
        this.toastr.success(res.details, res.status);
        this.redirectTo('/Home');
      });
  }

  mapClicked(event: any) {
    confirm('Are you sure to delete ');
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

  redirectTo(uri: string) {
    this.sharedService.redirectTo(uri);
  }
}
