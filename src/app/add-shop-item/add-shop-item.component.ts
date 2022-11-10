import { AnimationEvent } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { openCloseAnimation, OpenCloseState } from './add-shop-item.animation';

@Component({
  selector: 'app-add-shop-item',
  templateUrl: './add-shop-item.component.html',
  styleUrls: ['./add-shop-item.component.scss'],
  animations: [openCloseAnimation()]
})
export class AddShopItemComponent {
  private _adding = false;
  public get adding(): boolean {
    return this._adding;
  }
  public set adding(adding: boolean) {
    this._adding = adding;
  }
  private _cardState: OpenCloseState = 'close';
  public get cardState(): OpenCloseState {
    return this._cardState;
  }
  private set cardState(cardState: OpenCloseState) {
    this._cardState = cardState;
  }

  constructor() { }

  public animationStart(event: AnimationEvent) {
    if (event.fromState === 'open') {
      this.adding = false;
    }
  }

  public animationDone(event: AnimationEvent) {
    if (event.toState === 'open') {
      this.adding = true;
    }
  }

  public cancel() {
    this.cardState = 'close';
  }

  public showForm() {
    this.cardState = 'open';
  }

}
