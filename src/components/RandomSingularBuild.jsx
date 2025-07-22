import {loadRandomPersonality} from '/PAssionArts2025/firebase'
import {useState, useEffect} from 'react'
import {RenderImages,TaggedSingularBuild} from './SingularBuild'

const RandomSingularBuild=()=>{
    const [personalityData, setPersonalityData] = useState(null);
    const [quizChoices, setQuizChoices] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await loadRandomPersonality();
                console.log("Data in React component:", data); 
                if (data) {
                    var optionList=[];
                    setPersonalityData(data.personalityType);
                    data.chosenOptions.forEach((option) => {
                      optionList[option.question]=option.selectedOption;
                      console.log(optionList);
                    });
                    console.log(optionList);
                    setQuizChoices(optionList);
                }
            } catch (err) {
                console.error("Error fetching personality data:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (quizChoices){
        return(
        <TaggedSingularBuild quizChoices={quizChoices} personalityData={personalityData}/>
        );
    }
}

export default RandomSingularBuild;