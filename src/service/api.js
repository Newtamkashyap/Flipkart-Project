


import axios from 'axios';

const URL = 'http://localhost:8000';

export const authenticateSignup = async (data) => {
    try {
      return await axios.post(`${URL}/signup`, data)//this method takes atleast 2 agruments first URL and than data
    }
    catch (error) {

    }
}