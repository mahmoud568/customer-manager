import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  location = {
    latitude: 30.72816,
    longitude: 31.79697,
    zoom: 10,
    isFullScreen: true,
  };
  @Input() customer: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // location_on_land
    // const faker = require('faker');
    // var createCard = faker.helpers.createCard();
    // console.log(createCard);
    // const faker = require('faker');
    // var latitude = faker.address.latitude();
    // var longitude = faker.address.longitude();
    // console.log(latitude);
    // console.log(longitude);

    this.http
      .get('https://api.3geonames.org/?randomland=eg&json=1')
      .subscribe((res) => console.log(res));
  }
}
