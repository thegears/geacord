import { useTranslation } from "react-i18next";
import { Plus } from "react-feather";
import AddServer from './AddServer';

export default function ServerBar({ setActiveTab, setActiveServer, $Servers, $User, set$Servers }) {

  const { t } = useTranslation();

  return <>

    <AddServer $Servers={$Servers} set$Servers={set$Servers} />

    <ul className="menu bg-base-100 w-auto h-full flex align-center items-center  ">
      <li>
        <a onClick={() => setActiveTab("account")} className="tooltip w-12 tooltip-right p-0 rounded-full" data-tip={t("chat.account.account")}>
          <div className="avatar">
            <div className=" rounded-full hover:ring ring-base-100 ring-offset-base-100 ring-offset-2">
              <img className="rounded-full" src={`http://geacord.pockethost.io/api/files/users/${$User?.id}/${$User?.avatar}`} />
            </div>
          </div>
        </a>
      </li>

      <div className="divider"></div>
      {
        $Servers.map((server: any, index: any) => {
          return <div key={index}>
            <li>
              <a onClick={() => {
                setActiveTab("server")
                setActiveServer(server)
              }} className="tooltip tooltip-right w-12 p-0 rounded-full mb-2" data-tip={server?.name}>
                <div className="avatar">
                  <div className=" rounded-full hover:ring ring-base-100 ring-offset-base-100 ring-offset-2">
                    <img className="rounded-full " src={`http://geacord.pockethost.io/api/files/servers/${server?.id}/${server?.avatar}`} />
                  </div>
                </div>
              </a>
            </li>
          </div>
        })
      }
      <li>
        {/* @ts-ignore */}
        <a onClick={() => document.getElementById("addServerModal").showModal()} className="tooltip tooltip-right p-0 rounded-full mt-2" data-tip={t("chat.add-server.add-server")}>
          <div className="avatar">
            <div className=" rounded-full hover:ring ring-base-100 ring-offset-base-100 ring-offset-2">
              <Plus />
            </div>
          </div>
        </a>
      </li>

    </ul>
  </>
};
