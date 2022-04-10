import { Component, Input } from '@angular/core';
import { getEnumKeyByEnumValue } from '../../../helpers/enums/enums.helper';

import { Address } from '../../types/contact.types';

export type Item = Address[] | string[] | string;

export enum ItemType {
  ADDRESSES = 'addresses',
  PHONES = 'phones',
  EMAILS = 'emails',
  STRING = 'string',
}

@Component({
  selector: 'app-contact-details-item',
  templateUrl: './contact-details-item.component.html',
  styleUrls: ['./contact-details-item.component.scss']
})
export class ContactDetailsItemComponent {
  readonly ItemType = ItemType;
  itemType: ItemType;

  @Input() item: any;
  @Input() label = '';
  @Input() set type(type: ItemType) {
    this.itemType = ItemType[getEnumKeyByEnumValue(ItemType, type)];
  }
}
