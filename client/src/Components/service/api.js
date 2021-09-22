import axios from 'axios';


const url = 'http://localhost:8004/api/v1/auth';

export const authenticateSignup = (user)=>{
    try{
        return axios.post("http://localhost:8004/api/v1/auth/signup", user)

    }catch(error){
        console.log('error while calling user api')
    }
    
}

export const authenticateLogin= (user)=>{
    try{
        return axios.post(`${url}/login`, user);

    }catch(error){
        console.log('error while calling login api')
    }
    
}