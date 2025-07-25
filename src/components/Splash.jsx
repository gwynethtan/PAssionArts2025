import { motion } from "framer-motion";
import NavLinkButton from '../components/NavLinkButton'
import { useEffect, useState } from 'react';
import { getPersonalityCount } from '/PAssionArts2025/firebase';
import { getDatabase,update,onValue,remove,push, ref, get, set,query,limitToFirst,limitToLast,orderByChild,equalTo,runTransaction} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

const Splash = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const countPersonality = getPersonalityCount(setCount);
    const langSelect = document.querySelector('.goog-te-combo');
    const handleLanguageChange = () => {
      console.log(langSelect?.value);
    };

    if (langSelect) {
      langSelect.addEventListener('change', handleLanguageChange);
    }
    return () => {
      if (langSelect) {
        langSelect.removeEventListener('change', handleLanguageChange);
      }
      countPersonality(); 
    };
  }, []);

  return (
    <section className="min-h-screen bg-[url('/splashBg.svg')] relative bg-cover bg-center flex justify-center items-center sm:px-16 px-3 object-fill">
      <motion.div
        initial={{ opacity: 0.6, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{once:false}} 
      > 
        <div className="mb-6 items-center justify-items-center flex flex-col">
          <div>
            <div className="flex justify-center">
              <span className="items-center text-center text-white bg-main rounded-full sm:py-1 py-0.5 px-6 mx-6 sm:text-regular text-sm font-medium sm:mb-8 mb-6">Over {count} dreamers have built their SG60</span>
            </div>
            <h1 className="text-main sm:text-5xl text-4xl font-bold text-center sm:pb-5 pb-1">
              What kind of SG 60 Dream Builder are you?
            </h1>
            <p className="text-main sm:text-2xl text-lg font-md text-center pb-5">Build your own environment in real time and know your personality</p>
          </div>
          <NavLinkButton link="Quiz" text="Take Quiz" />  
        </div>
        <div className="flex flex-col space-y-4 items-center pt-20 absolute left-1/2 -translate-x-1/2 bottom-5">
          <p className="text-center text-main font-medium">Scroll to see more</p>
          <div className="animate-bounce">
            <img className="size-12 rotate-90 drop-shadow-lg" src="arrowButton.svg"/>
          </div>
        </div> 
      </motion.div>     
    </section>
  );
};


export default Splash;