import personality from '../data/personality.json';
import { useMemo, useEffect,useRef ,useState} from 'react';
import {createPersonality} from '/PAssionArts2025/firebase'
import SingularBuild from './SingularBuild'
import NavLinkButton from './NavLinkButton'
import { motion } from "framer-motion";

const Result = ({ quizChoices , reset }) => {
  const hasSubmitted = useRef(false);
  const [userHighestOptionType, getHighestOptionType]=useState(0);
  useEffect(() => {
    if (!hasSubmitted.current) {
      hasSubmitted.current = true;
      const count = [0, 0, 0, 0]; 
      // Count number of times a choice has been chosen 
      quizChoices.forEach((choice) => {
        if (choice !== undefined && count[choice] !== undefined) {
          count[choice]++;
        }
      });
      let highestOptionType = count.indexOf(Math.max(...count));
      createPersonality(highestOptionType, quizChoices);
      getHighestOptionType(highestOptionType)
    }
  }, [quizChoices]);
  return (
    <motion.section 
    initial={{ opacity: 0.6, scale: 0.6 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{once:false}} 
    className="min-h-screen flex justify-center items-center pb-5 sm:pt-20 pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center pb-5">
        <div>
          <div className="mx-8">
              <p className="text-main text-4xl font-black word-wrap text-left lg:text-center">
                {personality[userHighestOptionType].personalityType}
              </p>
              <hr className="w-full bg-secondary h-0.5 rounded-full mt-2"/>
          </div>
          <div className="flex sm:justify-left justify-center mt-5">
            <SingularBuild quizChoices={quizChoices}/>
          </div>
        </div>
        <div className="flex flex-col space-y-5 items-center justify-center mx-6 mt-4">
          <div className="flex space-x-2 lg:space-x-8 w-full justify-center">
            {personality[userHighestOptionType].hastags.map((hastag,index) => (
              <div className="bg-main text-white font-medium rounded-full text-center p-2 px-4 lg:text-xl">{hastag}</div>
            ))}
          </div>
          <p className="text-main text-lg lg:text-2xl font-medium text-center">
            {personality[userHighestOptionType].description}
          </p>
          <NavLinkButton link="/" text="Go Home" />
        </div>
      </div>
    </motion.section>
  );
};

export default Result;
