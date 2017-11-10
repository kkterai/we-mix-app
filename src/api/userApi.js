class UserApi {  
    static signup(user) {
      const request = new Request('/api/v1/signup', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }), 
        body: JSON.stringify({ user: user })
      });
  
      return fetch(request).then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    } 
  }
  
  export default UserApi;  