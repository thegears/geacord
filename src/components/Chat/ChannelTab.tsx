import { useEffect, useState } from "react"
import { sendMessage } from "../../services/pocketbase/server"
import { useTranslation } from "react-i18next";

export default function ChannelTab({ messages, activeChannel }) {

  const { t } = useTranslation();
  function onSendMessage() {
    //@ts-ignore
    const content = document.getElementById("sendMessageInput").value;
    if (!content) return;

    sendMessage(content, activeChannel.id);

    //@ts-ignore
    document.getElementById("sendMessageInput").value = ""
  };

  useEffect(() => {
    const objDiv = document.getElementById("messages");
    objDiv!.scrollTop = objDiv!.scrollHeight;
  }, [messages])



  return <>
    <div className="w-full h-full bg-base-100 p-3 flex flex-col">
      <div id="messages" className="h-full overflow-auto p-1 mb-2">
        {messages.map((message: any, index: number) => <div key={index}>
          <div className="chat chat-start">
            <div className="chat-header">
              {message.expand?.author.username}
            </div>
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={`http://geacord.pockethost.io/api/files/users/${message.expand.author?.id}/${message.expand.author?.avatar}`} />
              </div>
            </div>
            <div className="chat-bubble">{message.content}</div>
          </div>
        </div>)}
      </div>
      <div className="h-16 w-full">
        <input id="sendMessageInput" onKeyDown={(e) => {
          if (e.key == "Enter") {
            onSendMessage()
          }
        }} type="text" placeholder={t("chat.channel-tab.write")} className="input input-ghost w-full " />
      </div>
    </div>
  </>
};
