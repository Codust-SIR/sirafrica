import React, { useState } from "react";

const DonateCard = () => {
  return (
    <iframe
      src="https://donorbox.org/embed/join-our-cause-4?default_interval=m&amount=30&hide_donation_meter=true"
      name="donorbox"
      style={{
        border: "none",
        maxWidth: "500px",
        minWidth: "250px",
        maxHeight: "none!important",
      }}
      scrolling="no"
      height="900"
      width="100%"
      allow="payment"
    ></iframe>
  );
};

export default DonateCard;
