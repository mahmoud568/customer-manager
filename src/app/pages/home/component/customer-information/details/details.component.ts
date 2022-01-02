import { AgmMap } from '@agm/core';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Customer } from 'src/app/shared/interfaces/customer';
import { Location } from 'src/app/shared/interfaces/map';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() customer!: Customer;
  @ViewChild('map', { static: false }) myMap!: AgmMap;

  location: Location = {
    latitude: 33.57786,
    longitude: -101.85517,
    zoom: 3,
    isFullScreen: true,
  };

  constructor() {
    setTimeout(() => {
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
}
