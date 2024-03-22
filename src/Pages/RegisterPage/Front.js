import { useState } from 'react';
import './Front.css';
import { Register } from '../../API/Api';

function Front()
{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [cPassword,setCPassword]=useState('');

    const submitData=({name:name,email:email,password:password})=>{
        Register()
        .then(res=>{
           console.log(res);
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
               <input type='text' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
           </div>
           <div className='FormSection'>
               <label>Password</label>
               <input type='text' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
           </div>
           <div className='FormSection'>
               <label>Confirm Password</label>
               <input type='text' placeholder='ConfirmPassword' onChange={(e)=>setCPassword(e.target.value)}/>
           </div>
           <div className='FormSection'>
             <button>Sign Up</button>
           </div>
        </div>
        <h3 style={{color:"black"}} onClick={()=>window.location.href="/Login"}>Already have the account?<span style={{color:"#B82925"}}>Log In</span></h3>
   </div>
   );
}
export default Front;