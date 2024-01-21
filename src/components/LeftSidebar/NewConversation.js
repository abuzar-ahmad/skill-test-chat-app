import React from "react";

function NewConversation(props) {
  let handleClick = () => {
    props.showNewConvoTab(true);
  };
  return (
    <div className="new-convo">
      <p>Add New Chat</p>
      <span className="fas" onClick={handleClick}>+
      </span>
    </div>
  );
}

export default NewConversation;