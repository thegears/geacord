import NavBar from '../NavBar/NavBar';
import Middle from './Middle/Middle';
import { useTranslation } from 'react-i18next';
import { themeChange } from 'theme-change';
import '../../services/i18n/i18n';
import { useEffect } from 'react';
import { isLogined } from '../../services/pocketbase/user';

export default function RegisterMain() {

  const { i18n } = useTranslation();

  useEffect(() => {

    if (isLogined()) window.location.href = "/";

    themeChange(false)
    const lang = localStorage.getItem("language") || "en";

    if (lang == "tr") i18n.changeLanguage("tr");
  }, [])


  return <>
    <NavBar />
    <Middle />
  </>
};
