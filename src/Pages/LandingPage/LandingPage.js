import './LandingPage.css';
import map from '../../Assets/map.jpg'
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

function LandingPage()
{
    return(
        <div className="LandingContainer">
           <Header/>
           <div className='LandingSubSection'>
            <h3>Weather Of Every State</h3>
            <img src={map}/>
           </div>
           <Footer/>
        </div>
    );
}
export default LandingPage;