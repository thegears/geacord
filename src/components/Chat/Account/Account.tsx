import ServerBar from "../ServerBar";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { useTranslation } from "react-i18next";
import { Droplet } from 'react-feather';
import '../../../services/i18n/i18n';

export default function AccountMain() {


  const { i18n, t } = useTranslation();

  useEffect(() => {
    themeChange(false)
    const lang = localStorage.getItem("language") || "en";

    if (lang == "tr") i18n.changeLanguage("tr");
  }, []);

  function onThemeChange(theme: string) {
    document.getElementById("mid").style['backgroundImage'] = `url('/${theme}-bg.svg')`;
  }



  return <>
    <div id="mid" className=" hero min-h-screen  bg-cover" style={{ backgroundImage: `url(/${localStorage.getItem("theme") || 'dark'}-bg.svg)` }} >

      <div className="hero-overlay bg-opacity-20"></div>
    </div >
    <div className='absolute flex w-screen h-screen top-0 left-0'>
      <div className='h-full' style={{ "width": "5%" }}>
        <ServerBar />
      </div>
      <div className="h-full w-full bg-base-100 bg-opacity-20">
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="btn m-1 btn-ghost"> <Droplet /> {t('home.navbar.theme.theme')}</label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li onClick={() => onThemeChange('light')} data-set-theme="light" data-act-class="ACTIVECLASS"><a>{t("home.navbar.theme.light")}</a></li>
            <li onClick={() => onThemeChange('dark')} data-set-theme="dark" data-act-class="ACTIVECLASS"><a>{t("home.navbar.theme.dark")}</a></li>
            <li onClick={() => onThemeChange('black')} data-set-theme="black" data-act-class="ACTIVECLASS"><a>Black</a></li>
            <li onClick={() => onThemeChange('synthwave')} data-set-theme="synthwave" data-act-class="ACTIVECLASS"><a>Synthwave</a></li>
            <li onClick={() => onThemeChange('cyberpunk')} data-set-theme="cyberpunk" data-act-class="ACTIVECLASS"><a>Cyberpunk</a></li>
            <li onClick={() => onThemeChange('night')} data-set-theme="night" data-act-class="ACTIVECLASS"><a>Night</a></li>
            <li onClick={() => onThemeChange('coffee')} data-set-theme="coffee" data-act-class="ACTIVECLASS"><a>Coffee</a></li>
            <li onClick={() => onThemeChange('aqua')} data-set-theme="aqua" data-act-class="ACTIVECLASS"><a>Aqua</a></li>
            <li onClick={() => onThemeChange('valentine')} data-set-theme="valentine" data-act-class="ACTIVECLASS"><a>Valentine</a></li>
            <li onClick={() => onThemeChange('retro')} data-set-theme="retro" data-act-class="ACTIVECLASS"><a>Retro</a></li>
            <li onClick={() => onThemeChange('blood')} data-set-theme="blood" data-act-class="ACTIVECLASS"><a>Blood</a></li>
          </ul>
        </div>
      </div>
    </div>
  </>
};
