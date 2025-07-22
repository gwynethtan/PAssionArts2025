import { motion } from "framer-motion";
import SingularDeveloper from "./SingularDeveloper";

const Developers=()=>{
    return (
      <motion.section 
      initial={{ opacity: 0.8, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{once:false}}
      className="py-16 flex justify-center items-center">
        <div>
          <span className="text-main text-5xl font-semibold text-center flex justify-center sm:pb-16 pb-8">Meet the dream builders</span>
          <div className="lg:flex justify-center lg:space-x-24 lg:space-y-0 space-y-12">
            <SingularDeveloper imageName="/gwynethSg60.jpg" name="Tan Ting Yu Gwyneth" school="Ngee Ann Polytechnic"/>
            <SingularDeveloper imageName="/josephSg60.jpg" name="Joseph Ang Cher Lek" school="Ngee Ann Polytechnic"/>
          </div>
        </div>
        </motion.section>
    );
}

export default Developers;