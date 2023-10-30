import ThemeSwap from './ThemeSwap';
import Profile from './Profile';
import LanguageSwap from './LanguageSwap';

export default function NavBar() {
  return <>
    <div className="navbar bg-base-100">
      <div className="navbar-start">

        <ThemeSwap />
        <LanguageSwap />
      </div>
      <div className="navbar-center hidden lg:flex">

        <a className="btn btn-ghost normal-case text-xl">Geacord</a>
      </div>
      <div className="navbar-end">
        <Profile />
      </div>
    </div>

  </>
};
