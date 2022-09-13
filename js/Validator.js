'use strict'

export class Validator {
  typeofInputValidate(inputValue) {
    const inputValueNaN = isNaN(inputValue);

    if(inputValueNaN) {
      return 'string';
    } else {
      return 'number';
    }
  }

  refreshNow() {
    sessionStorage.setItem('refreshed', 'true');
    window.location.reload();
  }

  sessionLogged() {
    sessionStorage.setItem('isLogged', 'true');
    window.location.reload();
  }

  deleteRefreshSession() {
    const refreshed = sessionStorage.getItem('refreshed');

    if(refreshed === 'true') {
    sessionStorage.removeItem('refreshed');
    }
  }

  deleteSessionLogged() {
    const isLogged = sessionStorage.getItem('isLogged');

    if(isLogged === 'true') {
    sessionStorage.removeItem('isLogged');
    }
  }

}