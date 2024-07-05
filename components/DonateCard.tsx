import React, { useState } from "react";

const DonateCard = () => {
  return (
    <iframe
      src="https://donorbox.org/embed/join-our-cause-4?default_interval=m&amount=30&hide_donation_meter=true"
      name="donorbox"
      allowpaymentrequest="allowpaymentrequest"
      frameborder="0"
      scrolling="no"
      height="900px"
      width="100%"
      style="max-width: 500px; min-width: 250px; max-height:none!important"
      allow="payment"
    ></iframe>
  );
};

export default DonateCard;
