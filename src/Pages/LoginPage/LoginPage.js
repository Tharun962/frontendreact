import { useState } from "react";
import { Login } from "../../API/Api";
import { useNavigate } from "react-router-dom";

function LoginPage()
{
  const navigate=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const submitData=()=>{
    if(email=="" ||email===null)
    {
      alert("Please enter email");
      return;
    }
    if(password=="" ||password===null)
    {
      alert("Password not match");
      return;
    }

      Login({email:email,password:password})
      .then(res=>{
          if(res.login)
          {
            sessionStorage.setItem("login","true");
            navigate("/Weather");
          }
          else
          {
            sessionStorage.setItem("login","false");
            alert(res.msg);
          }
      })
      .catch(err=>{
        sessionStorage.setItem("login","false");
          throw err;
      });
  }
   return (
       <div className='FrontContainer'>
        <h3>Log In</h3>
        <div className="FormLogin">
           <div className='FormSection'>
               <label>Email</label>
               <input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
           </div>
           <div className='FormSection'>
               <label>Password</label>
               <input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
           </div>
           <div className='FormSection'>
           <h3>Forgot your password?</h3>
           </div>
           <div className='FormSection'>
             <button onClick={()=>submitData()}>Sign In</button>
           </div>
        </div>
        <h3 style={{color:"black"}} onClick={()=>window.location.href="/"}>Already have the account?<span style={{color:"#B82925"}}>Log In</span></h3>
      </div>
   ); 
}
export default LoginPage;