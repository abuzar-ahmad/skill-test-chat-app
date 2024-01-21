import React, { useEffect, useState } from "react";

import LeftChatBubble from "./LeftChatBubble";
import { useDispatch } from "react-redux";
import RightChatBubble from "./RightChatBubble";
import MessageInput from "./MessageInput";
import { addNewMessage } from "../../actions/contact";
import ProfileHeader from "../LeftSidebar/ProfileHeader";
function MessageBox(props) {
  const [chat, setChat] = useState([]);
  const [length, setLength] = useState();
  const dispatch = useDispatch();
  useEffect(() => {


    setChat(props.user.chatlog);
    setLength(props.user.chatlog.length);
  }, [props]);
  var time;
  var hours;
  var minutes;
  function currentTime() {
  var currentDate = new Date();
  hours = currentDate.getHours();
  hours = hours % 12 || 12;
  hours = appendZero(hours);

  // hours = appendZero(currentDate.getHours());
  minutes = appendZero(currentDate.getMinutes());
  var seconds = appendZero(currentDate.getSeconds());
  const am = "AM";
  const pm = "PM";
   const timeZone = hours <= 12 ? am : pm;

  time = `${hours}:${minutes}:${seconds} ${timeZone}`;

  }

  function appendZero(time) {
  if (time < 10 && time.length !== 2) {
    return "0" + time;
  }
  return time;
}


setInterval(currentTime, 1000);



  let updateMesssages = (message) => {
    let object = {
      text: message,
      timestamp: time,
      sender: "me",
      message_id: length + 1,
    };
    dispatch(addNewMessage(object, props.user.id));
    // updatelength
    setLength(object.message_id);

    setChat([...chat, object]);
  };

  return (
    <>
      <div className="message-box">
        <div className="message-box-header" xs={6} sm={7} md={8} lg={7} xl={8}>
          <ProfileHeader user={props.user} />
        </div>
        {chat.length === 0 && (
          <p className="no-message-alert">NO MESSAGES FOUND</p>
        )}
        {chat.length > 0 && (
          <div className="messages-section">
            {chat.map((m, index) =>
              m.sender === "me" ? (
                <RightChatBubble
                  message={m}
                  key={index}
                  name={"Abuzar"}
                  image={"data:image/jpeg;base64,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"}
                />
              ) : (
                <LeftChatBubble
                  message={m}
                  key={index}
                  name={props.user.name}
                  image={props.user.image}
                />
              )
            )}
          </div>
        )}

        <MessageInput newMessageHandler={updateMesssages} user={props.user} />
      </div>
    </>
  );
}

export default MessageBox;
