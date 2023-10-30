import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Middle() {

  const { t } = useTranslation();

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.querySelectorAll("li[data-act-class]").forEach(e => {
      e.addEventListener("click", (e) => {
        var newTheme = e.target.innerText;
        if (newTheme == "Aydınlık") newTheme = "light";
        else if (newTheme == "Karanlık") newTheme = "dark";
        setTheme(newTheme.toLowerCase());
      })
    })
  }, []);

  return <>
    <div className="bg-primary">
      <div className="hero min-h-screen" style={{ backgroundImage: `url(/${theme}-bg.svg)` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{t("home.middle.text1")}</h1>
            <p className="mb-5">{t("home.middle.text2")}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  </>
}
