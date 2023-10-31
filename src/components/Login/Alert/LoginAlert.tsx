import { useTranslation } from 'react-i18next';

export default function UsernameAlert() {

  const { t } = useTranslation();

  return <>
    <div className="toast">
      <div className="alert alert-error">
        <span>{t("login-register.register-login-alert")}</span>
      </div>
    </div>
  </>
};
