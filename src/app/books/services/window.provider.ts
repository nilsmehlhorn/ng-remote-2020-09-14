import { InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken<Window>('window');

export function getWindow(): Window {
  return window;
}
