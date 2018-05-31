import { AddressType } from './AddressType';
import { IAddress, SampleAddress } from './IAddress';

export interface IPerson {

    firstname: string;

    lastname: string;

    born: Date,

    addresses: IAddress[]
}

const SamplePerson: IPerson = { firstname: "john", lastname: "doe", born: new Date(), addresses: [SampleAddress] };
export { SamplePerson };