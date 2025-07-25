import React, { useEffect } from 'react';

const LanguageTranslator = () => {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          autoDisplay: false,
          includedLanguages: 'en,zh-CN,zh-TW,yue,ms,ta,hi'
        },
        'google_translate_element'
      );
    };
    const script = document.createElement('script');
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);

  return <div id="google_translate_element"/>;
};

export default LanguageTranslator;
