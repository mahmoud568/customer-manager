export interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
  isFullScreen?: boolean;
  mapType?: string;
  markers?: Array<Marker>;
}

// added marker interface
export interface Marker {
  lat: number;
  lng: number;
}
