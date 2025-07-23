import { motion } from "framer-motion";
import NavLinkButton from '../components/NavLinkButton'
import { useEffect, useState } from 'react';
import { personalityRef } from '/PAssionArts2025/firebase';
import { getDatabase,update,onValue,remove,push, ref, get, set,query,limitToFirst,limitToLast,orderByChild,equalTo,runTransaction} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

const Splash = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    get(personalityRef).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const numberOfNodes = Object.keys(data).length;
        setCount(numberOfNodes);
      } else {
        setCount(0);
      }
    }).catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, []);

  return (
    <section>
      <div className="min-h-screen bg-[url('/splashBg.svg')] bg-cover bg-center flex justify-center items-center sm:pt-40 pt-28 px-5 object-fill">
      <motion.div
        initial={{ opacity: 0.6, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{once:false}} 
        className="items-center justify-center flex flex-col sm:space-y-10 space-y-12"     
      >
        <div>
          <p className="text-center text-main font-medium pb-2">Over {count} dreamers have built their SG60</p>
          <h1 className="text-main text-5xl font-bold text-center pb-5">
            What kind of SG 60 Dream Builder are you?
          </h1>
          <p className="text-main sm:text-2xl text-xl font-md text-center pb-3">Build your own environment in real time and know your personality</p>
        </div>
        <NavLinkButton link="Quiz" text="Take Quiz" />   
        <div className="flex flex-col space-y-6 items-center pt-10">
          <p className="text-center text-main font-medium">Scroll to see more</p>
          <div className="animate-bounce">
            <img className="size-12 rotate-90" src="arrowButton.svg"/>
          </div>
        </div> 
      </motion.div>     
      </div>
    </section>
  );
};


export default Splash;