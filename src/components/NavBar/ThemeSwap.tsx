import { useTranslation } from 'react-i18next';
import { Droplet } from 'react-feather';

export default function ThemeSwap() {

  const { t } = useTranslation();


  return <>
    <div className="dropdown dropdown-hover">
      <label tabIndex={0} className="btn m-1 btn-ghost"> <Droplet /> {t('home.navbar.theme.theme')}</label>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li data-set-theme="light" data-act-class="ACTIVECLASS"><a>{t("home.navbar.theme.light")}</a></li>
        <li data-set-theme="dark" data-act-class="ACTIVECLASS"><a>{t("home.navbar.theme.dark")}</a></li>
        <li data-set-theme="synthwave" data-act-class="ACTIVECLASS"><a>Synthwave</a></li>
        <li data-set-theme="cyberpunk" data-act-class="ACTIVECLASS"><a>Cyberpunk</a></li>
        <li data-set-theme="night" data-act-class="ACTIVECLASS"><a>Night</a></li>
        <li data-set-theme="coffee" data-act-class="ACTIVECLASS"><a>Coffee</a></li>
        <li data-set-theme="aqua" data-act-class="ACTIVECLASS"><a>Aqua</a></li>
      </ul>
    </div>
  </>

}
