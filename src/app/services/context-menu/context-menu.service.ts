import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Content {
  title: string | null,
  action?: () => void,
  link?: string,
}

export interface ContextMenu {
  show: boolean,
  target: HTMLElement | null,
  content: Content[],
}

@Injectable({
  providedIn: 'root'
})
export class ContextMenuService {
  initialState: ContextMenu = {
    show: false,
    target: null,
    content: [],
  };

  private readonly _menu = new BehaviorSubject<ContextMenu>(this.initialState);
  readonly menu$ = this._menu.asObservable();

  set(state: ContextMenu) {
    this._menu.next(state);
  }
}
