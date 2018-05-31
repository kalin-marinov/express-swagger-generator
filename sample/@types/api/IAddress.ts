import { AddressType } from './AddressType';

export interface IAddress {
    type: AddressType
    street: string
    number: number
}

const SampleAddress: IAddress = { number: 10, street: "random str", type: AddressType.Home }

export { SampleAddress };