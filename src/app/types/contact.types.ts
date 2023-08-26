import { binary } from './binary.type';

export interface Contact {
  id: number;
  uuid: string,
  firstName: string,
  lastName: string,
  jobTitle: string,
  bio: string,
  emails: string[],
  dateOfBirth: string,
  addresses: Address[],
  comments: string[],
  isFavourite: binary,
}

export interface Address {
  contactId: number,
  address1: string,
  address2: string,
  address3: string,
  city: string,
  county: string,
  postCode: string,
}
