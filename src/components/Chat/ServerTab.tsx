import { getUser } from '../../services/pocketbase/user';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { deleteServer, quitServer } from '../../services/pocketbase/server';
import CreateChannel from './CreateChannel';
import ChannelTab from './ChannelTab';
import { PB } from '../../services/pocketbase/pocketbase';

export default function ServerTab({ activeServer, $User, setActiveTab, set$Servers, $Servers }) {

  const { t } = useTranslation();

  const [copiedCode, setCopiedCode] = useState(false)
  const [channels, setChannels] = useState([]);
  const [activeChannel, setActiveChannel] = useState();
  const [messages, setMessages] = useState<any>([]);
  const [members, setMembers] = useState([])



  function onDeleteServer() {
    deleteServer(activeServer.id);
    var servers = $Servers;
    servers = servers.filter((a: any) => a.id != activeServer.id);
    set$Servers(servers);
    setActiveTab("")
  };

  function onQuitServer() {
    quitServer(activeServer.id);
    var servers = $Servers;
    servers = servers.filter((a: any) => a.id != activeServer.id);
    set$Servers(servers);
    setActiveTab("")
  };

  useEffect(() => {

    async function reqMessages() {
      //@ts-ignore
      const rmessages = await PB.collection('channels').getOne(activeChannel.id, {
        expand: 'messages.author'
      })


      setMessages(rmessages.expand.messages || [])
    }

    //@ts-ignore
    if (activeChannel?.id) {
      reqMessages()
      PB.collection("messages").unsubscribe()
      //@ts-ignore
      PB.collection('messages').subscribe("*", async function(e) {
        if (e.action == 'create') {
          //@ts-ignore
          if (activeChannel.id == e.record.channel) {
            const rmessage = await PB.collection('messages').getOne(e.record.id, {
              expand: 'author,channel'
            })
            setMessages(prevMessages => [...prevMessages, rmessage])
          }
        }

      });
    }
  }, [activeChannel])



  useEffect(() => {
    const gmembers = activeServer.expand.members || [];
    const gchannels = activeServer.expand.channels || [];


    setMembers(gmembers);
    setChannels(gchannels)

    PB.collection("servers").unsubscribe()

    PB.collection('servers').subscribe(activeServer.id, async function(e) {
      if (e.action == 'update') {
        const newServer = await PB.collection('servers').getOne(activeServer.id, {
          expand: "members,channels"
        })


        setChannels(newServer.expand.channels || []);
        setMembers(newServer.expand.members || []);
      }
      if (e.action == "delete") {
        var servers = $Servers;
        servers = servers.filter((a: any) => a.id != activeServer.id);
        set$Servers(servers);
        setActiveTab("")

      }
    });
  }, [activeServer])

  return <>
    {
      (copiedCode) && <>
        <div className="toast toast-end opacity-100">
          <div className="alert alert-success opacity-100">
            <span>{t("chat.server-tab.copied")}</span>
          </div>
        </div>
      </>
    }
    <div className="h-full text-neutral-content w-full flex  bg-opacity-20 overflow-auto">
      <div className="h-full bg-base-200 opacity-80 p-3 w-auto flex flex-col justify-between" >
        <div>
          <button onClick={() => {
            navigator.clipboard.writeText(activeServer.id);
            setCopiedCode(true);
            setTimeout(() => {
              setCopiedCode(false);
            }, 5000);
          }} className="btn btn-wide btn-info btn-sm">{t("chat.server-tab.invite-users")}</button>
          <div className='divider'></div>
        </div>
        <CreateChannel channels={channels} setChannels={setChannels} activeServer={activeServer} />
        <div className='flex flex-col justify-start overflow-auto'>
          {
            channels.map((channel: any, index: number) => <div key={index}>
              <button onClick={() => {
                setActiveChannel(channel)

              }} className="btn btn-wide btn-xs">{channel.name}</button>
            </div>)
          }
          {
            (activeServer?.owner == $User?.id) && <>
              {/* @ts-ignore */}
              <button onClick={() => document.getElementById('createChannelModal').showModal()} className="btn btn-wide btn-accent btn-xs">{t("chat.server-tab.create-channel")}</button>
            </>
          }

        </div>
        {
          (activeServer?.owner == $User?.id) ? <>
            <div>
              <div className='divider'></div>
              <button onClick={() => onDeleteServer()} className="btn btn-wide btn-error btn-sm mt-2">{t("chat.server-tab.delete-server")}</button>
            </div>
          </>
            :
            <>
              <div>
                <div className='divider'></div>
                <button onClick={() => onQuitServer()} className="btn btn-wide btn-error btn-sm mt-2">{t("chat.server-tab.quit-server")}</button>
              </div>
            </>
        }

      </div>
      <div className='h-full bg-base-300 opacity-80 w-full flex flex-col justify-between'>
        <ChannelTab activeChannel={activeChannel} messages={messages} />
      </div>
      <div className='h-full bg-base-200 opacity-80 p-5 w-64 flex flex-col overflow-auto'>
        {
          members.map((member: any, index: number) => <div className='p-3  w-full hover:bg-primary mb-3 ' key={index}>
            <div className="avatar flex justify-center" >
              <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                <img src={`http://geacord.pockethost.io/api/files/users/${member?.id}/${member?.avatar}`} />
              </div>
            </div>
            <p className='font-bold cursor-default flex justify-center'>{member?.username}</p>
          </div>
          )
        }
      </div>
    </div>
  </>
};
