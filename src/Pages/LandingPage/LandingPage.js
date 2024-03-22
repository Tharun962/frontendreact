import './LandingPage.css';
import back from '../../Assets/background.jpg';
import menu from '../../Assets/menubar.png'
import cross from '../../Assets/cross.png'
import map from '../../Assets/map.jpg'
import Footer from '../../Components/Footer/Footer';

function LandingPage()
{
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
    return(
        <div className="LandingContainer">
           <div className='LandingBackground'>
             <img src={back}/>
             <h3 className='Title'>Weather Report</h3>
             <img src={menu} className='Menu' width="25" height="25"  onClick={()=>menuFunction()}/>
             <h2>Check the Weather Data</h2>
             <div className='SubMenu'>
                <img src={cross} className='Cross' width="25" height="25" onClick={()=>crossFunction()}/>
                <h3 onClick={()=>window.location.href="/SignUp"}>Sign Up</h3>
                <h3 onClick={()=>window.location.href="/Login"}>Login</h3>
             </div>
           </div>
           <div className='LandingSubSection'>
            <h3>Weather Of Every State</h3>
            <img src={map}/>
           </div>
           <Footer/>
        </div>
    );
}
export default LandingPage;