import { useEffect, useState } from 'react';
import { loadAllPersonality } from '/PAssionArts2025/firebase'; 
import { TaggedSingularBuild } from '../components/SingularBuild';
import { Carousel } from "flowbite-react";

const AllSingularBuilds = () => {
  const [allBuilds, setAllBuilds] = useState([]);
  const [buildCount, setBuildCount] = useState(0);
  useEffect(() => {
    const fetchBuilds = async () => {
      const data = await loadAllPersonality();
      console.log(data);
      const builds = Object.entries(data).map(([uid,userData]) => {
        const quizChoices = [];
        userData.chosenOptions.forEach(option => {
          quizChoices[option.question] = option.selectedOption;
        });
        return {
          personalityType: userData.personalityType,
          quizChoices: quizChoices,
        };
      });
      setAllBuilds(builds.reverse());
    };
    fetchBuilds();
  }, []);

  return (
    <div className="slider sm:mt-24 mt-20 flex relative w-screen h-screen overflow-x-hidden">
      {allBuilds.map((build,index) => (
        <div className="singularBuild" style={{ "--position": index }}>
          <TaggedSingularBuild
            quizChoices={build.quizChoices}
            personalityData={build.personalityType}
          />
        </div>
      ))}
    </div>
  );
};

export default AllSingularBuilds;