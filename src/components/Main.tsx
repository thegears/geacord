import { themeChange } from 'theme-change';
import { useEffect } from 'react';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import '../services/i18n/i18n';
import { useTranslation } from 'react-i18next';
import Middle from './Middle/Middle'

export default function Main() {


  const { i18n } = useTranslation();

  useEffect(() => {
    themeChange(false)
    const lang = localStorage.getItem("language") || "en";

    if (lang == "tr") i18n.changeLanguage("tr");
  }, [])

  return <>
    <NavBar />
    <Middle/>
    <Footer />
  </>
};
