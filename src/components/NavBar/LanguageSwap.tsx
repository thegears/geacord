import { useTranslation } from 'react-i18next';
import { Globe } from 'react-feather';

export default function ThemeSwap() {

  const { t, i18n } = useTranslation();

  function changeLanguage(lang: string) {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  }

  return <>
    <div className="dropdown dropdown-hover">
      <label tabIndex={0} className="btn m-1 btn-ghost"> <Globe /> {t('home.navbar.language.language')}</label>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li onClick={() => changeLanguage("tr")}><a>TR</a></li>
        <li onClick={() => changeLanguage("en")}><a>EN</a></li>
      </ul>
    </div>
  </>

}
