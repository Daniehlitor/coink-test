import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user = JSON.parse(localStorage.getItem('user')!);
  const current_path = state.url.slice(1);

  if (current_path == 'start' || current_path == 'register') {
    return user ? router.navigate(['/home']) : true;
  }

  return user ? true : router.navigate(['/start']);
};
