import { motion } from "framer-motion";
const SingularDeveloper=({imageName,name,school})=>{
    return (        
        <article className="flex flex-col justify-center items-center">
            <img src={imageName} className="rounded-full w-52 h-52 sm:w-60 sm:h-60 object-fill mb-4"/>
            <span className="text-lg font-bold text-main">{name}</span>
            <span className="text-base font-semibold text-secondary">{school}</span>
        </article>
    );
}

export default SingularDeveloper;