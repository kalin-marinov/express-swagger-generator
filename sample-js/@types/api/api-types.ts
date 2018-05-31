
export enum AddressType {
    Home,
    Work,
    Other
}

export interface IAddress {
    type: AddressType
    street: string
    number: number
}


export interface IMessageResponse {
    message: string
}

export interface IPerson {

    firstname: string;

    lastname: string;

    born: Date,

    addresses: IAddress[]
}
