import { useTranslation } from 'react-i18next';
import { loginUser } from '../../../services/pocketbase/user';
import { useState } from 'react';
import LoginAlert from '../Alert/LoginAlert';

export default function Middle() {

  const { t, i18n } = useTranslation();

  const [loginAlert, setLoginAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onFormSubmit(event) {
    event.preventDefault();


    const username = event.target[0].value;
    const password = event.target[1].value;

    setLoading(true);
    const res = await loginUser(username, password);


    if (res != 200) {
      setLoading(false);
      setLoginAlert(true);
      setTimeout(() => {
        setLoginAlert(false);
      }, 3000);
    } else {
      window.location.href = "/";
      setLoading(false);
    };

  };

  return <>
    {
      (loginAlert) && <LoginAlert />
    }
    <div className="bg-primary">
      <div id="mid" className="hero min-h-screen" style={{ backgroundImage: `url(/${localStorage.getItem("theme") || 'dark'}-bg.svg)` }}>
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="card flex-shrink-0 w-screen max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={onFormSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">{t("login-register.username")}</span>
                  </label>
                  <input type="text" className="input input-bordered text-base-content" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">{t("login-register.password")}</span>
                  </label>
                  <input type="password" className="input input-bordered" required />
                  <label className="label">
                    <a href={(i18n.language == 'tr') ? '/kayit' : '/register'} className="label-text-alt link link-hover">{t("login-register.register")}</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className={`btn ${(loading) && 'btn-disabled'} btn-primary`}> {(loading) && <span className='loading'></span>}  {t("login-register.login")}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
