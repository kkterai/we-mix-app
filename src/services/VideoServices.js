import fetch from 'isomorphic-fetch';

export const headers = () => {
    
    const token = localStorage.getItem('token');
  
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer: ${token}`,
    }
  }
  