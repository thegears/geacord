import { useTranslation } from 'react-i18next';
import { Droplet } from 'react-feather';

export default function ThemeSwap() {

  const { t } = useTranslation();

  function onThemeChange(theme: string) {
    document.getElementById("mid").style['backgroundImage'] = `url('/${theme}-bg.svg')`;
  }

  return <>
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
  </>

}
