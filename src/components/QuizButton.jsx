import { motion } from "framer-motion";

const QuizButton=({option,selected,onClick})=>{
    if (selected){
        return (
            <button className="py-3 bg-main rounded-xl text-white font-semibold" onClick={onClick}>{option}</button>
        );
    }
    else {
        return (
            <button className=" py-3 bg-secondary rounded-xl text-white font-semibold" onClick={onClick}>{option}</button>
        );
    }
}

export default QuizButton;