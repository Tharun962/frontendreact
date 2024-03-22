import back from '../../Assets/background.jpg';
import menu from '../../Assets/menubar.png'
import cross from '../../Assets/cross.png'
import './Header.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logout } from '../../API/Api';
function Header()
{
    const navigate=useNavigate();
    const [login,setLogin]=useState(false);
    useEffect(()=>{
        if(sessionStorage.getItem("login")==="true")
        {
           setLogin(true);
        }
        else
        {
            setLogin(false);
        }
    },[]);

    function crossFunction()
    {
        const crossIcon=document.querySelector(".Cross");
        const subMenu=document.querySelector(".SubMenu");

        crossIcon.addEventListener('click',()=>{
              subMenu.style.display="none";
        });
    }
    function menuFunction()
    {
        const menuIcon=document.querySelector(".Menu");
        const subMenu=document.querySelector(".SubMenu");

        menuIcon.addEventListener('click',()=>{
              subMenu.style.display="flex";
        });
    }
    
    function LogoutFunction()
    {
        Logout()
        .then(res=>{
            if(res.logout)
          {
            navigate("/");
            sessionStorage.setItem("login","false");
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
    return(
    <div className='LandingBackground'>
        <img src={back}/>
        <h3 className='Title'>Weather Report</h3>
        <img src={menu} className='Menu' width="25" height="25"  onClick={()=>menuFunction()}/>
        <h2>Check the Weather Data</h2>
        <div className='SubMenu'>
            <img src={cross} className='Cross' width="25" height="25" onClick={()=>crossFunction()}/>
            
         {login===false?
         (<React.Fragment><h3 onClick={()=>window.location.href="/SignUp"}>Sign Up</h3>
            <h3 onClick={()=>window.location.href="/Login"}>Login</h3></React.Fragment>)
            :
            <h3 onClick={()=>LogoutFunction()}>Logout</h3>
            }  
        </div>
        </div>
    );
}

export default Header;