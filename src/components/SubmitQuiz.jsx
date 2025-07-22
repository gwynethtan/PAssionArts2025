import SingularBuild from './SingularBuild'
const SubmitQuiz=({quizChoices,submitQuiz,handleBack})=>{
    return(
        <section className="min-h-screen pt-24 ">
            <div className="grid lg:grid-cols-2 grid-cols-1">
                <div className="justify-center flex">
                    <SingularBuild quizChoices={quizChoices}/>
                </div>
                <div className="flex flex-col items-center justify-center sm:space-y-6 space-y-4 py-5 px-5">
                    <span className="font-bold sm:text-3xl text-2xl text-main text-center">Confirm?</span>
                    <p className="font-medium sm:text-xl text-base text-main text-center">
                        Are you done building your SG60 and ready to make a new future?
                    </p>
                    <div className="flex space-x-5 justify-center">
                        <button onClick={handleBack} className="bg-secondary text-white p-3 w-32 rounded-xl text-md font-semibold">No</button>
                        <button onClick={submitQuiz} className="bg-green-400 text-white p-3 w-32 rounded-xl text-md font-semibold">Yes</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SubmitQuiz;