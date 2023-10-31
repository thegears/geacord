import { themeChange } from 'theme-change';
import { useEffect } from 'react';
import Footer from './Footer/Footer';
import NavBar from '../NavBar/NavBar';
import '../../services/i18n/i18n';
import { useTranslation } from 'react-i18next';
import Middle from './Middle/Middle'

export default function HomeMain() {


  const { i18n } = useTranslation();

  useEffect(() => {
    themeChange(false)
    const lang = localStorage.getItem("language") || "en";

    if (lang == "tr") i18n.changeLanguage("tr");
  }, [])

  return <>
    <NavBar />
    <Middle />
    <Footer />
  </>
};
