import React from "react";

function OrganizerAvatarCard(props) {
  return (
    <div className="org-card">
      <img src={props.userImage} alt={props.name} className="avatar-image" />
      <div className="org-avatar-info">
        <div className="avatar-name">{props.name}</div>
        <div className="avatar-designation">{props.designation}</div>
      </div>
    </div>
  );
}

export default OrganizerAvatarCard;
