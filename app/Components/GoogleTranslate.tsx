'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: any;
  }
}

const GoogleTranslate = () => {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en', // Langue de base définie dans ton HTML original
          includedLanguages: 'af,ar,bn,zh-CN,zh-TW,nl,fr,de,gu,hi,id,it,ja,jv,ko,ml,pa,pl,pt,ru,es,ta,te,tr,uk,ur,vi',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    };

    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div className="bg-white p-2 rounded-md shadow-sm mb-3 inline-block">
      <div id="google_translate_element"></div>
    </div>
  );
};

export default GoogleTranslate;