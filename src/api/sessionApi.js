class SessionApi {  
    static login(credentials) {
      const request = new Request('/api/v1/login', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }), 
        body: JSON.stringify({ auth: credentials })
      });
  
      return fetch(request).then(response => {
        debugger
        return response.json();
      }).catch(error => {
        return error;
      });
    } 
  }
  
  export default SessionApi;  