import { motion } from "framer-motion";
import questions from '../data/questions.json'
import personality from '../data/personality.json'

export const RenderImages=({quizChoices=[]})=>{
      return quizChoices.flatMap((quizChoice, questionNumber) => { 
        let questionDetails=questions[questionNumber];
        return questionDetails.location.map((location) => (
          <img className={location} src={questionDetails.images[quizChoice]}/>
        ));   
      }); 
}

const SingularBuild=({quizChoices=[]})=>{
  if (quizChoices.length > 0){
    return (
      <div className="h-[100vw] w-[75vw] lg:h-[74vh] lg:w-[56vh] grid grid-cols-12 grid-rows-12 rounded-xl overflow-hidden">
        <RenderImages quizChoices={quizChoices}/>
      </div>
    );
  }
  else{
    return(
      <div className="h-[100vw] w-[75vw] lg:h-[74vh] lg:w-[56vh] rounded-xl overflow-hidden">
        <img src="/blankBuild.svg" className="w-full h-full object-cover" />
      </div>
    );
  }

}

export const TaggedSingularBuild=({quizChoices=[],personalityData})=>{
      return (
      <div className="w-[75vw] md:w-[45vw] lg:w-[42vh]">
        <div className="h-[100vw] md:h-[60vw] lg:h-[56vh] grid grid-cols-12 grid-rows-12 rounded-t-xl overflow-hidden">
            <RenderImages quizChoices={quizChoices}/>
        </div>
        <div className="rounded-b-xl no-wrap py-4 lg:py-[3vh] bg-main">
          <div className="text-white text-md text-center font-regular">
              Created by
          </div>
          <div className="text-white text-xl text-center font-semibold">
              {personality[personalityData].personalityType}
          </div>
        </div>
      </div>
      );
}

export default SingularBuild;
