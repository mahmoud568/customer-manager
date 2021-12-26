export interface Order {
  customerID: number;
  items: Item[];
  shipmentID: number;
  total: number;
}

export interface Item {
  itemName: string;
  itemOrderedQuantity: number;
  itemPrice: number;
  totalItemPrice: number;
}
