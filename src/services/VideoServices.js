import fetch from 'isomorphic-fetch';

export const headers = () => {
    
    const token = localStorage.getItem('token');
  
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer: ${token}`,
    }
  }
  
  export const parseResponse = (response) => {
    return response.json()
      .then(json => {
        if (!response.ok) {
          console.log(json.errors)
          return Promise.reject(json.errors);
        }
        return json;
      });
  }
  

  export default {
    
      get(url, params = {}) {
        return fetch(`${url}`, {
          method: 'GET', 
          headers: headers(),
        })
        .then(parseResponse)
      },
      
      post(url, data = {}) {
        const body = JSON.stringify(data);
        return fetch(`${url}`, {
          method: 'POST',
          headers: headers(),
          body,
        })
        .then(parseResponse)
      },
    
      patch(url, data) {
        const body = JSON.stringify(data);
    
        return fetch(`${url}`, {
          method: 'PATCH', 
          headers: headers(),
          body,
        })
        .then(parseResponse)
      }, 
    
      delete(url) {
        return fetch(`${url}`, {
          method: 'DELETE', 
          headers: headers(),
        })
        .then(parseResponse)
      }
    }
    