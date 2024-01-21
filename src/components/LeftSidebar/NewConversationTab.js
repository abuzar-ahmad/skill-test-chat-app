import React from "react";
import ContactTab from "./ContactTab";

function NewConversationTab({ contacts, showNewConvoTab }) {
  let handleClose = () => {
    showNewConvoTab(false);
  };
  return (
    <>
      <div className="new-convo-tab">
        <div className="nct-header">
          <p>Friends</p>
          <span className="fas" onClick={handleClose}>
            X
          </span>
        </div>
        <div className="nct-list" onClick={handleClose}>
          {contacts.map((contact, index) => (
            <ContactTab contact={contact} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default NewConversationTab;