import Splash from '../components/Splash'
import RandomSingularBuild from '../components/randomSingularBuild'
import About from '../components/About'
import Developers from '../components/Developers'
import Footer from '../components/Footer'
import SplashDisplayRandom from '../components/SplashDisplayRandom'
const Home=()=>{
    return (
        <div>
          <Splash/>
          <SplashDisplayRandom/>
          <About/>
          <Developers/>
        </div>
    );
}

export default Home;


            