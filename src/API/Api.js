import axios from 'axios';

const url="http://backendnode-6l8v.onrender.com";

const loginEndPoint="login"
const registerEndPoint="register"
const logoutEndPoint="logout"

async function Login(data)
{
   try{
     const response=await axios.post(`${url}/${loginEndPoint}`,data,{headers:{'Content-Type':'application/json'},withCredentials:true})
     if(response.data)
     {
        return response.data;
     }
     else
     {
        return false;
     }
    }
   catch(err)
   {
       throw err;
   }
}
async function Register(data)
{
    try{
        const response=await axios.post(`${url}/${registerEndPoint}`,data,{headers:{'Content-Type':'application/json'},withCredentials:true})
        if(response.data)
        {
           return response.data;
        }
        else
        {
           return false;
        }
    }
    catch(err)
    {
        throw err;
    }
}
async function Logout()
{
   try{
    const response=await axios.get(`${url}/${logoutEndPoint}`,{headers:{'Content-Type':'application/json'},withCredentials:true})
    if(response.data)
    {
       return response.data;
    }
    else
    {
       return false;
    }
    }
   catch(err)
   {
    throw err;

   }
}
export {Login,Logout,Register};
