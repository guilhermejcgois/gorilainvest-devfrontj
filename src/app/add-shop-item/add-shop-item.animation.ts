import { animate, AnimateTimings, animation, state, style, transition, trigger, useAnimation } from "@angular/animations";

const defaultTime: string = '700ms';
const defaultClosedHeight = '48px';
const defaultOpenedHeight = '100px';

export type OpenCloseState = 'close' | 'open';

export type OpenCloseAnimationConfig = {
  closedHeight?: string;
  openedHeight?: string;
  time?: string;
};

export const openCloseAnimation = (config: OpenCloseAnimationConfig = {}) => trigger('openClose', [
  state('close', style({
    height: config.closedHeight || defaultClosedHeight,
  })),
  state('open', style({
    height: config.openedHeight || defaultOpenedHeight,
  })),
  transition('open => close', [
    animate(config.time || defaultTime)
  ]),
  transition('close => open', [
    animate(config.time || defaultTime)
  ]),
]);
