import { useState } from "react";
import { Plus, X, LogIn } from "react-feather";
import { useTranslation } from 'react-i18next';
import { createServer, joinServer } from '../../services/pocketbase/server';
import Alert from "../Register/Alert/Alert";

export default function AddServer({ set$Servers, $Servers }) {

  const [active, setActive] = useState("add");
  const [alert, setAlert] = useState("");
  const [reqLoading, setReqLoading] = useState(false);

  const { t } = useTranslation();

  async function onAddServer(event: any) {
    event.preventDefault();

    const formData = new FormData();

    // @ts-ignore
    const avatar = document.getElementById("avatar").files[0];
    const name = event.target[1].value;


    formData.append("name", name);
    formData.append("avatar", avatar);


    setReqLoading(true);
    const res = await createServer(formData);
    setReqLoading(false);

    if (res?.res != 200) {
      if (res.data?.data?.avatar) {
        setAlert("avatar");
        setTimeout(() => {
          setAlert("");
        }, 3000);
      };
    } else {
      set$Servers([...$Servers, res.server])
      //@ts-ignore
      document.getElementById("addServerModal").close()
    }
  }

  async function onJoinServer(event: any) {
    event.preventDefault();


    // @ts-ignore
    const code = event.target[0].value;



    setReqLoading(true);
    const res = await joinServer(code);
    setReqLoading(false);

    if (res?.res != 200) {
      setAlert("server");
      setTimeout(() => {
        setAlert("");
      }, 3000);
    } else {
      set$Servers([...$Servers, res.server])
      //@ts-ignore
      document.getElementById("addServerModal").close()
    }
  }


  return <>
    {
      (alert != "") && <Alert error={alert} />
    }
    <dialog id="addServerModal" className="modal">
      <div className="modal-box">
        <div className="w-full flex justify-end">
          {/* @ts-ignore */}
          <button onClick={() => document.getElementById("addServerModal").close()}><X /></button>
        </div>
        <div className="w-full h-5/6">
          {
            (active == "add") ? <>
              <span className="text-2xl w-full flex justify-center">{t("chat.add-server.create-server")}</span>
              <form onSubmit={onAddServer} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">{t("login-register.avatar")}</span>
                  </label>
                  <input id="avatar" type="file" className="text-base-content" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">{t("chat.add-server.name")}</span>
                  </label>
                  <input name='username' autoComplete='true' minLength={3} type="text" className="input input-bordered text-base-content" required />
                </div>

                <div className="form-control mt-6">
                  <button className={`btn ${(reqLoading) && 'btn-disabled'} btn-primary`}> {(reqLoading) && <span className='loading'></span>} {t("chat.add-server.create")}</button>
                </div>
              </form>
            </>
              :
              <>
                <span className="text-2xl w-full flex justify-center">{t("chat.add-server.join-server")}</span>
                <form onSubmit={onJoinServer} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">{t("chat.add-server.code")}</span>
                    </label>
                    <input name='username' autoComplete='true' minLength={3} type="text" className="input input-bordered text-base-content" required />
                  </div>

                  <div className="form-control mt-6">
                    <button className={`btn ${(reqLoading) && 'btn-disabled'} btn-primary`}> {(reqLoading) && <span className='loading'></span>} {t("chat.add-server.join")}</button>
                  </div>
                </form>
              </>
          }
        </div>
        <div className="w-full flex ">
          <button onClick={() => setActive("add")} className="btn w-1/2 rounded-none"><Plus /></button>

          <button onClick={() => setActive("join")} className="btn w-1/2 rounded-none"><LogIn /></button>
        </div>
      </div>
    </dialog>
  </>
}; 
