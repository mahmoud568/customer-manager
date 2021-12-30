export interface Order {
  customerID: number;
  cutomerFullName?: string;
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
