import { useTranslation } from 'react-i18next';
import { User, LogOut, MessageCircle } from 'react-feather';

export default function Profile() {
  const { t } = useTranslation();

  return <>
    <div className="dropdown dropdown-end dropdown-hover">
      <label tabIndex={0} className="btn btn-ghost m-1"> <User /> {t("home.navbar.profile.profile")}</label>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><a> <MessageCircle /> Chat</a></li>
        <li><a> <LogOut /> {t('home.navbar.profile.logout')}</a></li>
      </ul>
    </div>
  </>
};
