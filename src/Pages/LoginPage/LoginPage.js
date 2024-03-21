function LoginPage()
{
   return (
       <div className='FrontContainer'>
        <h3>Log In</h3>
        <div className="FormLogin">
           <div className='FormSection'>
               <label>Email</label>
               <input type='text' placeholder='Email'/>
           </div>
           <div className='FormSection'>
               <label>Password</label>
               <input type='text' placeholder='Password'/>
           </div>
           <div className='FormSection'>
           <h3>Forgot your password?</h3>
           </div>
           <div className='FormSection'>
             <button>Sign In</button>
           </div>
        </div>
        <h3 style={{color:"black"}} onClick={()=>window.location.href="/"}>Already have the account?<span style={{color:"#B82925"}}>Log In</span></h3>
      </div>
   ); 
}
export default LoginPage;