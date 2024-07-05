import React, { useState } from "react";

const DonateCard = () => {
  return (
    <iframe
      src="https://donorbox.org/embed/join-our-cause-4?default_interval=m&amount=30&hide_donation_meter=true"
      name="donorbox"
      allowpaymentrequest
      style="border: none; max-width: 500px; min-width: 250px; max-height: none!important;"
      scrolling="no"
      height="900"
      width="100%"
      allow="payment"
    ></iframe>
  );
};

export default DonateCard;
