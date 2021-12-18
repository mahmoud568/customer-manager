import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from 'src/app/shared/interfaces/map';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() customer: any;
  location: Location = {
    latitude: 33.57786,
    longitude: -101.85517,
    zoom: 4,
    isFullScreen: true,
  };

  constructor(private route: ActivatedRoute) {
    this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    const faker = require('faker');
    var createCard = faker.helpers.createCard();
    console.log(createCard);
    setTimeout(() => {
      //@ts-ignore
      console.log(this.customer);
      this.location = {
        latitude: this.customer.location.latitude,
        longitude: this.customer.location.longitude,
        zoom: 4,
        isFullScreen: true,
        markers: [
          {
            lat: this.customer.location.latitude,
            lng: this.customer.location.longitude,
          },
        ],
      };
    }, 1000);
  }
}
