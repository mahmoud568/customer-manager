
export interface Customer {
    readonly id: number;
    readonly name: string;
    readonly adress: string;
    readonly location: Location;
    readonly orders: Order[];
}


export interface Order {
    readonly [index: number]: { id: number; item: string; price: string };
    readonly adress: string;
    readonly location: Location;
    readonly state: string;
}

export interface Location {
    readonly lat: string;
    readonly lang: string;
    readonly bateryState: number;
    readonly help: boolean;
}

