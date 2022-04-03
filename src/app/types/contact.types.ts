export interface Contact {
  id: number;
  uuid: string,
  firstName: string,
  lastName: string,
  jobTitle: string,
  bio: string,
  emails: string,
  dateOfBirth: string,
  addresses: Address[],
  comments: string[],
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
