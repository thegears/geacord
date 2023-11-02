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
    const disableBg = localStorage.getItem("disableBg") || "false";
    if (disableBg == "false") document.getElementById("mid").style['backgroundImage'] = `url('/${theme}-bg.svg')`;
  };

  function enableBg() {
    localStorage.setItem("disableBg", "false");
    const theme = localStorage.getItem("theme") || 'dark';
    document.getElementById("mid").style['backgroundImage'] = `url('/${theme}-bg.svg')`;
  };

  function disableBg() {
    localStorage.setItem("disableBg", "true");
    document.getElementById("mid").style['backgroundImage'] = ``;
  };

  function changeLanguage(lang: string) {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };


  return <>
    <div className="h-full text-neutral-content w-full bg-base-100 bg-opacity-20 p-5 overflow-auto">
      <p className="font-bold">{t("chat.account.change-theme")}</p>
      <p>{t("chat.account.change-theme-desc")}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-11 2xl:grid-cols-11 mt-5 mb-5 gap-4">
        <button data-theme="light" className="btn" onClick={() => onThemeChange('light')} data-set-theme="light" data-act-class="ACTIVECLASS"><a>{t("home.navbar.theme.light")}</a></button>
        <button data-theme="dark" className="btn" onClick={() => onThemeChange('dark')} data-set-theme="dark" data-act-class="ACTIVECLASS"><a>{t("home.navbar.theme.dark")}</a></button>
        <button data-theme="black" className="btn" onClick={() => onThemeChange('black')} data-set-theme="black" data-act-class="ACTIVECLASS"><a>Black</a></button>
        <button data-theme="synthwave" className="btn" onClick={() => onThemeChange('synthwave')} data-set-theme="synthwave" data-act-class="ACTIVECLASS"><a>Synthwave</a></button>
        <button data-theme="cyberpunk" className="btn" onClick={() => onThemeChange('cyberpunk')} data-set-theme="cyberpunk" data-act-class="ACTIVECLASS"><a>Cyberpunk</a></button>
        <button data-theme="night" className="btn" onClick={() => onThemeChange('night')} data-set-theme="night" data-act-class="ACTIVECLASS"><a>Night</a></button>
        <button data-theme="coffee" className="btn" onClick={() => onThemeChange('coffee')} data-set-theme="coffee" data-act-class="ACTIVECLASS"><a>Coffee</a></button>
        <button data-theme="aqua" className="btn" onClick={() => onThemeChange('aqua')} data-set-theme="aqua" data-act-class="ACTIVECLASS"><a>Aqua</a></button>
        <button data-theme="valentine" className="btn" onClick={() => onThemeChange('valentine')} data-set-theme="valentine" data-act-class="ACTIVECLASS"><a>Valentine</a></button>
        <button data-theme="retro" className="btn" onClick={() => onThemeChange('retro')} data-set-theme="retro" data-act-class="ACTIVECLASS"><a>Retro</a></button>
        <button data-theme="blood" className="btn" onClick={() => onThemeChange('blood')} data-set-theme="blood" data-act-class="ACTIVECLASS"><a>Blood</a></button>
      </div>
      <p className="font-bold">{t("chat.account.disable-bg")}</p>
      <p>{t("chat.account.disable-bg-desc")}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-11 2xl:grid-cols-11 mt-5 mb-5 gap-4">
        <button onClick={enableBg} className="btn btn-accent"><a>Enable</a></button>
        <button onClick={disableBg} className="btn btn-error"><a>Disable</a></button>
      </div>
      <p className="font-bold">{t("chat.account.change-language")}</p>
      <p>{t("chat.account.change-language-desc")}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-11 2xl:grid-cols-11 mt-5 gap-4">
        <button onClick={() => changeLanguage('tr')} className="btn"><a>{t("chat.account.turkish")}</a></button>
        <button onClick={() => changeLanguage('en')} className="btn"><a>{t("chat.account.english")}</a></button>
      </div>
    </div>
  </>
};
