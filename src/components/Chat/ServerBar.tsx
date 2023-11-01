import { useState, useEffect } from "react";
import { getUser } from '../../services/pocketbase/user';
import { useTranslation } from "react-i18next";

export default function ServerBar() {

  const { t, i18n } = useTranslation();

  const [$User, set$User] = useState<any>();

  useEffect(() => {
    async function getRes() {
      const res = await getUser();
      set$User(res);
    };

    getRes();
  }, [])

  return <>
    <ul className="menu bg-base-200 h-full flex align-center items-center   rounded-box">
      <li>
        <a href={(i18n.language == 'tr') ? '/chat/hesap' : '/chat/account'} className="tooltip tooltip-right p-0 rounded-full" data-tip={t("chat.account")}>
          <div className="avatar">
            <div className=" rounded-full hover:ring ring-base-100 ring-offset-base-100 ring-offset-2">
              <img className="rounded-full " src={`http://geacord.pockethost.io/api/files/users/${$User?.id}/${$User?.avatar}`} />
            </div>
          </div>
        </a>
      </li>

    </ul>
  </>
};
