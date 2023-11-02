import { useState } from "react";
import { Plus, X, LogIn } from "react-feather";
import { useTranslation } from 'react-i18next';
import { createChannel } from "../../services/pocketbase/server";

export default function AddServer({ activeServer, setChannels, channels }) {

  const [reqLoading, setReqLoading] = useState(false);

  const { t } = useTranslation();

  async function onCreateChannel(event: any) {
    event.preventDefault();


    // @ts-ignore
    const name = event.target[0].value;


    setReqLoading(true);
    const res = await createChannel(activeServer.id, name);
    setReqLoading(false);

    setChannels([...channels, res.channel])

    if (res?.res != 200) {

    } else {
      //@ts-ignore
      document.getElementById("createChannelModal").close()
    }
  }



  return <>

    <dialog id="createChannelModal" className="modal">
      <div className="modal-box">
        <div className="w-full flex justify-end">
          {/* @ts-ignore */}
          <button onClick={() => document.getElementById("createChannelModal").close()}><X /></button>
        </div>
        <div className="w-full h-5/6">
          <span className="text-2xl w-full flex justify-center">{t("chat.create-channel.create-channel")}</span>
          <form onSubmit={onCreateChannel} className="card-body">

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
        </div>
      </div>
    </dialog >
  </>
}; 
