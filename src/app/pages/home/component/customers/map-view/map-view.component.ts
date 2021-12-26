import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/shared/interfaces/customer';
import { Location } from 'src/app/shared/interfaces/map';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements OnInit {
  @Input() customers!: Customer[];
  @Output() customerSelected = new EventEmitter();
  @Output() customerDetailsView = new EventEmitter();
  location: Location = {
    latitude: 33.57786,
    longitude: -101.85517,
    zoom: 4,
    isFullScreen: true,
  };
  constructor() {}

  ngOnInit(): void {}
  markerClicked(event: any) {
    console.log(event);
  }
}
