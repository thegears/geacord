import { themeChange } from 'theme-change';
import { useEffect, useState } from 'react';
import '../../services/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { isLogined } from '../../services/pocketbase/user';
import ServerBar from './ServerBar';
import AccountTab from './Account/Account';
import ServerTab from './ServerTab';
import { getUser } from '../../services/pocketbase/user';
import { PB } from '../../services/pocketbase/pocketbase';

export default function ChatMain() {

  const [activeTab, setActiveTab] = useState<string>("");
  const [pageLoading, setPageLoading] = useState(true);
  const [activeServer, setActiveServer] = useState();

  const [$User, set$User] = useState<any>();
  const [$Servers, set$Servers] = useState<any[]>([]);

  useEffect(() => {
    async function getRes() {
      const user = await getUser();
      set$User(user);
      const servers = user.expand?.servers || []


      set$Servers(servers);

      setPageLoading(false);

    };

    getRes();

  }, [])



  const { i18n } = useTranslation();

  useEffect(() => {
    themeChange(false)
    const lang = localStorage.getItem("language") || "en";

    if (lang == "tr") i18n.changeLanguage("tr");
  }, []);



  useEffect(() => {

    PB.collection('servers').subscribe("*", async function(e) {
      if (e.action == "delete") {
        var servers = $Servers;
        servers = servers.filter((a: any) => a.id != e.record.id);
        set$Servers(servers);
        setActiveTab("")
      } else if (e.action == 'update') {

      }
    });
  }, [])

  useEffect(() => {
    if (!isLogined()) window.location.href = "/";
  }, []);

  return <>
    {
      (pageLoading) && <>
        <div className='h-screen w-screen z-10 bg-base-100 absolute flex justify-center items-center'>
          <span className="loading"></span>
        </div>
      </>

    }
    <div id="mid" className=" hero min-h-screen  bg-cover" style={{ backgroundImage: `url(/${localStorage.getItem("theme") || 'dark'}-bg.svg)` }} >

      <div className="hero-overlay bg-opacity-70"></div>
    </div >
    <div className='absolute flex w-screen h-screen top-0 left-0'>

      <div className='h-full'>
        <ServerBar set$Servers={set$Servers} $Servers={$Servers} $User={$User} setActiveServer={setActiveServer} setActiveTab={setActiveTab} />
      </div>
      <div className='h-full w-full'>
        {
          (activeTab == 'account') && <>
            <AccountTab />
          </>
        }
        {
          (activeTab == 'server') && <>
            <ServerTab $User={$User} set$Servers={set$Servers} setActiveTab={setActiveTab} $Servers={$Servers} activeServer={activeServer} />
          </>
        }
      </div>
    </div>
  </>
};
