import { motion } from "framer-motion";
import AboutImage from "../assets/react.svg"
import NavLinkButton from '../components/NavLinkButton'

const About=()=>{
    return (
        <motion.section                 
        initial={{ opacity: 0.8, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{once:false}}
        className="min-h-[80vh] bg-main sm:mx-24 sm:my-8 m-0 rounded-xl flex justify-center items-center p-10 py-10">
            <div className="flex flex-col items-center" >
                <span className="text-5xl font-bold text-white mb-8 text-center">What is PassionArts 2025?</span>
                <p className="sm:text-xl text-lg font-medium text-white text-center mb-8">
                    Residents are invited to participate in workshops, performances, and art installations throughout the celebration. Themed “Our Neighbourhood Gems”, this year’s festival will unfold across more than 60 festival villages, celebrating the unique identities that make our neighbourhoods truly special.
                </p>
                <NavLinkButton link="https://www.instagram.com/passionartssg/?hl=en" text="See Instagram" />
            </div>
        </motion.section>
    );
}

export default About;