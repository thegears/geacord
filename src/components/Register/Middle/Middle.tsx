import { useTranslation } from 'react-i18next';
import { registerUser, loginUser } from '../../../services/pocketbase/user';
import { useState } from 'react';
import UsernameAlert from '../Alert/UsernameAlert';

export default function Middle() {

  const { t, i18n } = useTranslation();

  const [usernameAlert, setUsernameAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onFormSubmit(event: any) {
    event.preventDefault();

    const formData = new FormData();

    // @ts-ignore
    const avatar = document.getElementById("avatar").files[0];
    const username = event.target[1].value;
    const password = event.target[2].value;

    formData.append("username", username);
    formData.append("password", password);
    formData.append("passwordConfirm", password);
    formData.append("avatar", avatar);


    setLoading(true);
    const res = await registerUser(formData);

    if (res != 200) {
      setLoading(false);
      if (res.data?.data?.username) {
        setUsernameAlert(true);
        setTimeout(() => {
          setUsernameAlert(false);
        }, 3000);
      };
    } else {
      await loginUser(username, password);
      window.location.href = "/";
      setLoading(false);
    };

  };

  return <>
    {
      (usernameAlert) && <UsernameAlert />
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
                    <span className="label-text">{t("login-register.avatar")}</span>
                  </label>
                  <input id="avatar" type="file" className="text-base-content" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">{t("login-register.username")}</span>
                  </label>
                  <input minLength={3} type="text" className="input input-bordered text-base-content" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">{t("login-register.password")}</span>
                  </label>
                  <input minLength={8} type="password" className="input input-bordered" required />
                  <label className="label">
                    <a href={(i18n.language == 'tr') ? '/giris' : '/login'} className="label-text-alt link link-hover">{t("login-register.login")}</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className={`btn ${(loading) && 'btn-disabled'} btn-primary`}> {(loading) && <span className='loading'></span>} {t("login-register.register")}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
