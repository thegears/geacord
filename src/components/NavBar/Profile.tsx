import { useTranslation } from 'react-i18next';
import { User, LogOut, MessageCircle, LogIn } from 'react-feather';
import { isLogined, getUser } from '../../services/pocketbase/user';
import { useEffect, useState } from 'react';

export default function Profile() {
  const { t, i18n } = useTranslation();
  const $isLogined = isLogined();
  const [$User, set$User] = useState<any>();

  useEffect(() => {
    async function getRes() {
      const res = await getUser();
      set$User(res);
    };

    getRes();
  }, [])

  function loginLogoutHref() {
    if ($isLogined) {
      if (i18n.language == 'tr') return '/cikis';
      else return '/logout';
    } else {
      if (i18n.language == 'tr') return '/giris';
      else return '/login';
    };
  };

  return <>
    <div className="dropdown dropdown-end dropdown-hover">
      <label tabIndex={0} className="btn btn-ghost m-1"> <User /> {t("home.navbar.profile.profile")}</label>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        {
          ($isLogined) && <li className='p-2 text-center'>

            <div className="avatar">
              <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={`http://geacord.pockethost.io/api/files/users/${$User?.id}/${$User?.avatar}`} />
              </div>
              <span className='font-bold'>{$User?.username}</span>
            </div>
          </li>
        }
        {
          ($isLogined) && <><li><a href="/chat"> <MessageCircle /> Chat</a></li></>
        }
        <li><a href={loginLogoutHref()}>
          {
            ($isLogined) ?
              <><LogOut /> {t('home.navbar.profile.logout')}</>
              :

              <><LogIn /> {t('home.navbar.profile.login')}</>
          }
        </a></li>
      </ul>
    </div>
  </>
};
