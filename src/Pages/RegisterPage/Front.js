import { useState } from 'react';
import './Front.css';
import { Register } from '../../API/Api';
import { useNavigate } from 'react-router-dom';

function Front()
{
    const navigate=useNavigate();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [cPassword,setCPassword]=useState('');

    const submitData=()=>{
        if(name=="" ||name===null)
        {
          alert("Please enter name");
          return;
        }
        if(email=="" ||email===null)
        {
          alert("Please enter email");
          return;
        }
        if(password=="" ||password===null)
        {
          alert("Please enter email");
          return;
        }
        if(cPassword=="" ||cPassword===null)
        {
          alert("Please enter Confirm Password");
          return;
        }
        if(password!==cPassword)
        {
          alert("Password are not same");
          return;
        }
        Register({name:name,email:email,password:password})
        .then(res=>{
            if(res.register)
          {
            navigate("/Login");
          }
          else
          {
            alert(res.msg);
          }
        })
        .catch(err=>{
           throw err;
        });
    }

   return (
   <div className='FrontContainer'>
        <h3>Log In</h3>
        <div className="FormLogin">
           <div className='FormSection'>
               <label>Name</label>
               <input type='text' placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
           </div>
           <div className='FormSection'>
               <label>Email</label>
               <input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
           </div>
           <div className='FormSection'>
               <label>Password</label>
               <input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
           </div>
           <div className='FormSection'>
               <label>Confirm Password</label>
               <input type='text' placeholder='ConfirmPassword' onChange={(e)=>setCPassword(e.target.value)}/>
           </div>
           <div className='FormSection'>
             <button onClick={()=>submitData()}>Sign Up</button>
           </div>
        </div>
        <h3 style={{color:"black"}} onClick={()=>window.location.href="/Login"}>Already have the account?<span style={{color:"#B82925"}}>Log In</span></h3>
   </div>
   );
}
export default Front;