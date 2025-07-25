const QuizIntro=({onClick})=>{
    return(
        <section
        className="min-h-screen w-screen bg-[url('/splashBg.svg')] bg-cover bg-center object-fill flex flex-col justify-center items-center gap-y-8 px-5 sm:px-24"
        >
        <img src="build.svg" className="h-24 w-24"/>
        <div>
            <h1 className="text-main sm:text-4xl text-3xl font-bold text-center">Build Singapore with us</h1>
            <p className="text-main font-semibold text-center sm:text-xl text-base pt-4">
                You stand at the edge of tomorrow, where every heartbeat of this country is shaped by a dreamer like you.
                Tonight, the city listens.
                Tonight, you dream it alive.
                Make tomorrow your reality tonight.
            </p>            
        </div>
        <button onClick={onClick} className="bg-main px-8 p-3 text-white font-semibold rounded-xl mt-3 mb-5">Start Build</button>
        </section>        
    );
}

export default QuizIntro;