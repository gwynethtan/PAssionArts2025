import { useEffect, useState } from 'react';
import { loadAllPersonality,getPersonalityCount } from '/PAssionArts2025/firebase';
import { TaggedSingularBuild } from '../components/SingularBuild';
import { Carousel } from "flowbite-react";
import Slider from 'react-infinite-logo-slider'

const AllSingularBuilds = () => {
  const [allBuilds, setAllBuilds] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const countPersonality = getPersonalityCount(setCount);
    const fetchBuilds = async () => {
      const data = await loadAllPersonality();
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
    return () => {
      countPersonality(); 
    };
  }, []);

  return (
    <section className="flex justify-center items-center min-h-screen">
      <div>
        <h1 className="text-main text-5xl md:text-5xl lg:text-[6vh] font-bold text-center pt-14 pb-12 md:pb-20 lg:pb-6 px-3">{count} dreams brought to life!</h1>
        <div className="slider flex relative w-screen overflow-x-hidden">
          <Slider
          width="580px"
          duration={80}
          pauseOnHover={false}
          blurBorders={false}
          blurBorderColor={'#fff'}
          >
            {allBuilds.map((build,index) => (
              <Slider.Slide key={index}>
                <TaggedSingularBuild
                  quizChoices={build.quizChoices}
                  personalityData={build.personalityType}
                />
              </Slider.Slide>
            ))}
          </Slider>
        </div>
      </div>
    </section>

  );
};

export default AllSingularBuilds;
