import React, { useState, useEffect } from 'react';
import QuizButton from '../components/QuizButton'
import questions from '../data/questions.json'
import QuizIntro from '../components/QuizIntro'
import SubmitQuiz from '../components/SubmitQuiz'
import Result from '../components/Result'
import SingularBuild from '../components/SingularBuild'

const Quiz=()=>{
  const [screen, setScreen] = useState("intro"); 

  // Store the choices made by the user
  const [quizChoices, storeQuizChoices]= useState([]);

  // Store current question number
  const [questionNumber, setQuestionNumber] = useState(0);

  //Reference to details for current question number
  const currentQuestionDetails = questions[questionNumber];

  const handleUpdatedOption = (optionNumber) => {
    storeQuizChoices((prev) => {
      console.log("Selected:", optionNumber, "for Q", questionNumber);
      const updatedOptions = [...prev];
      updatedOptions[questionNumber] = optionNumber;
      return updatedOptions;
    });
  };

  const submitQuiz=()=>{
      setScreen("result");
      console.log("I SUNMIITED");
  }

  const resetQuiz=()=>{
      setQuestionNumber(0);
      storeQuizChoices([]);
  }

  

  const handleNext = () => {
    if (screen=="intro"){
      setScreen("quiz");
    }
    else if (quizChoices[questionNumber]== undefined) {
      alert("Choose an option");
    }
    else if (questionNumber < questions.length-1) {
      setQuestionNumber((prev) => prev + 1);
      console.log(questionNumber);
    }
    else if (questionNumber==questions.length-1){
      setScreen("submit");
    }
  };

  const handleBack = () => {
    if (screen=="submit"){
      setScreen("quiz")
    }
    else if (questionNumber>0) {
      setQuestionNumber((prev) => prev - 1);
    }
    else if (questionNumber==0){
      setScreen("intro");
      console.log("intro on");
    }
  };

  if (screen == "intro") return <QuizIntro onClick={()=>setScreen("quiz")}/>;
  if (screen === "submit") return <SubmitQuiz quizChoices={quizChoices} submitQuiz={submitQuiz} handleBack={handleBack} />;
  if (screen == "result") return <Result quizChoices={quizChoices} reset={resetQuiz}/>;

      //  <SingularBuild quizChoices={quizChoices}/>
  return (
    <section className="min-h-screen w-screen grid lg:grid-cols-2 grid-cols-1 sm:pt-24 pt-20 p-8">
      <div className="justify-center flex">
        <SingularBuild quizChoices={quizChoices}/>
      </div>
      <div className="mt-5 self-center">
        <div className="flex-col items-center justify-center sm:space-y-8 space-y-4 lg:px-24 md:px-20 sm:px-24">
          <div className="flex justify-center">
            <span className="text-main sm:text-2xl text-xl font-bold text-center">{currentQuestionDetails.question}</span>
          </div>
          <div className="flex flex-col justify-center gap-3 w-full">
            {currentQuestionDetails.options.map((option, idx) => (
                <QuizButton key={idx} option={option} onClick={()=>handleUpdatedOption(idx)} selected={quizChoices[questionNumber]==idx}/>
            ))}
          </div>
          <div className="flex justify-center space-x-8">
            <button onClick={handleBack} className="-scale-x-100">
              <img src="/arrowButton.svg"/>
            </button>              
            <button onClick={handleNext}>
              <img src="/arrowButton.svg"/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quiz;