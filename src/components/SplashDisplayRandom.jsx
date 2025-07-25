import RandomSingularBuild from './randomSingularBuild';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SplashDisplayRandom = () => {
    const [numBuilds, setNumBuilds] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1400) {
                setNumBuilds(4);
            } 
            else if (window.innerWidth>=1350){
                setNumBuilds(3);
            }
            else if (window.innerWidth>=900){
                setNumBuilds(2);
            }            
            else {
                setNumBuilds(1);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
    <motion.section 
      initial={{ opacity: 0.8, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{once:false}}        
        className="px-8 py-12">
            <div className="flex items-center justify-between pb-5">
                <span className="font-semibold text-main text-xl word-wrap sm:text-2xl">
                    See what our community has created
                </span>
                <NavLink to='/BuildDisplay'>
                    <button className="rounded-full">
                        <img src="/arrowButton.svg" className="sm:w-12 sm:h-12 w-8 h-8" />
                    </button>
                </NavLink>
            </div>
            <div className={`flex flex-wrap justify-center gap-x-10 gap-y-8`}>
                {Array.from({ length: numBuilds }).map((_, i) => (
                    <RandomSingularBuild key={i} />
                ))}
            </div>
        </motion.section>
    );
};

export default SplashDisplayRandom;
