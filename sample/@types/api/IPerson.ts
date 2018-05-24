import { AddressType } from './AddressType';

export interface IPerson{

    firstname : string;

    lastname : string;

    born: Date,

    addresses: {
        type: AddressType
        street: string
        number: number
    }[]

}