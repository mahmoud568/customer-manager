export interface Customer {
  id: number;
  name: name;
  address: address;
  location: location;
  email: string;
  gender: string;
  totalPayment: number;
}
export interface name {
  firstName: string;
  lastName: string;
}
export interface address {
  streetAddress: string;
  cityName: string;
  state: string;
}
export interface location {
  latitude: number;
  longitude: number;
}
