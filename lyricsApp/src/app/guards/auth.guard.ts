import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (_, state) => {
  const token = localStorage.getItem('token');
  if (token) {
    return true; // User is authenticated
  } else {
    const router = inject(Router);
    router.navigate(['/login']); // Redirect to login if not authenticated
    return false;
  }
};