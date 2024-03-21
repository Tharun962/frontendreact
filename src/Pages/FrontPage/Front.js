import './Front.css';

function Front()
{
   return (
   <div className='FrontContainer'>
        <h3>Log In</h3>
        <div className="FormLogin">
           <div className='FormSection'>
               <label>Name</label>
               <input type='text' placeholder='Name'/>
           </div>
           <div className='FormSection'>
               <label>Email</label>
               <input type='text' placeholder='Email'/>
           </div>
           <div className='FormSection'>
               <label>Password</label>
               <input type='text' placeholder='Password'/>
           </div>
           <div className='FormSection'>
               <label>Confirm Password</label>
               <input type='text' placeholder='ConfirmPassword'/>
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