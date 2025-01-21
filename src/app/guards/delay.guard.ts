import { CanActivateFn } from '@angular/router';
import { delay, of } from 'rxjs';

export const delayGuard: CanActivateFn = (route, state) => {
  return of(true).pipe(delay(1000));
};

