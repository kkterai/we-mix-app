export function headers() {
    let headers = {
      'Content-Type': 'application/json',
    }
  
    if (localStorage.token) {
      Object.assign(headers, {
        'Authorization': `${localStorage.token}`,
      });
    }

    return headers;
}
  
export function requestOptions(options = {}) {
    return {...options, headers: headers()};
}
  