import { themeChange } from 'theme-change';
import { useEffect } from 'react';
import '../../services/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { isLogined } from '../../services/pocketbase/user';
import ServerBar from './ServerBar';

export default function ChatMain() {


  const { i18n } = useTranslation();

  useEffect(() => {
    themeChange(false)
    const lang = localStorage.getItem("language") || "en";

    if (lang == "tr") i18n.changeLanguage("tr");
  }, []);




  useEffect(() => {
    if (!isLogined()) window.location.href = "/";
  }, []);

  return <>
    <div className=" hero min-h-screen  bg-cover" style={{ backgroundImage: `url(/${localStorage.getItem("theme") || 'dark'}-bg.svg)` }} >

      <div className="hero-overlay bg-opacity-20"></div>
    </div >
    <div className='absolute w-screen h-screen top-0 left-0'>
      <div className='h-full' style={{ "width": "5%" }}>
        <ServerBar />
      </div>
    </div>
  </>
};
