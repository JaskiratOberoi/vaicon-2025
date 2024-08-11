import React from "react";
// import org from "../../assets/org.png";
import OrganizerAvatarCard from "./OrganizerAvatarCard";

import { organizers } from "../../data/organizers";

function Organizer() {
  return (
    // <div className="organizer" id="organizers">
    //   <div className="org-title orbitron-font-set">Organizers</div>
    //   <img src={org} alt="all members of venous" />
    // </div>
    <div className="organizers" id="organizers">
      <div className="org-title orbitron-font-set">Organizers</div>
      {organizers.map((section, index) => (
        <div key={index}>
          <div className="org-sec-title orbitron-font-set" key={index}>
            {section.sectionTitle}
          </div>
          <div className="org-sec-cards">
            {section.members?.map((member, id) => (
              <OrganizerAvatarCard
                userImage={member.userImage}
                name={member.name}
                designation={member?.designation}
                key={id}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Organizer;
