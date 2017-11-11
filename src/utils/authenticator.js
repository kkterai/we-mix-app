import React from 'react';

export function loggedIn() {
    return !!localStorage.token;
  }

export function logOut() {
    localStorage.clear();
  }
