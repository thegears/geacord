import { useTranslation } from 'react-i18next';

export default function UsernameAlert({ error }) {

  const { t } = useTranslation();

  return <>
    <div className="toast">
      <div className="alert alert-error">
        <span>{
          (error == "username") ? t("login-register.register-username-alert") : (error == 'avatar') ? t("login-register.register-avatar-alert") : t("chat.add-server.undefined-server")
        }</span>
      </div>
    </div>
  </>
};
