import Splash from '../components/Splash'
import RandomSingularBuild from '../components/randomSingularBuild'
import About from '../components/About'
import Developers from '../components/Developers'
import { useEffect, useState } from 'react';
import SplashDisplayRandom from '../components/SplashDisplayRandom'
const Home=()=>{
    const [showLangModal, setShowLangModal] = useState(false);
    const languages = [
      { code: 'en', label: 'English' },
      { code: 'zh-CN', label: '简体中文' },
      { code: 'zh-TW', label: '繁體中文' },
      { code: 'zh-yue', label: '廣東話' },
      { code: 'ms', label: 'Bahasa Melayu' },
      { code: 'ta', label: 'தமிழ்' },
      { code: 'hi', label: 'हिन्दी' },
    ];
    useEffect(() => {
      const hasChosenLanguage = sessionStorage.getItem('langChosen');
      console.log(hasChosenLanguage);
      if (!hasChosenLanguage) {
        setShowLangModal(true);
      }
    }, []);
    const changeLanguage = (langCode) => {
      const select = document.querySelector("select.goog-te-combo");
      if (select) {
        select.value = langCode;
        select.dispatchEvent(new Event("change"));
      }
      sessionStorage.setItem('langChosen', 'true');
      setShowLangModal(false);
    };
    return (
        <div>
          {showLangModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg text-center">
                <h2 className="text-main text-xl font-semibold mb-4">Choose Your Language</h2>
                <div className="space-y-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="w-full py-2 px-4 rounded bg-main text-white"
                      onClick={() => changeLanguage(lang.code)}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          <Splash/>
          <SplashDisplayRandom/>
          <About/>
          <Developers/>
        </div>
    );
}

export default Home;


            