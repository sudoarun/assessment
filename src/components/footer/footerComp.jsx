import React from "react";

const FooterComp = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{ height: 400, backgroundColor: "#1E1E1E" }}
    >
      <div className="flex flex-col justify-center items-center text-white w-2/3">
        <h1 className="font-semibold text-3xl">The transition CDN-dCDN</h1>
        <p className="block mt-10">
          FanCloud pioneers a new era of connectivity with its decentralised
          content delivery network (dCDN), leveraging a global network of
          community-powered nodes. By harnessing a decentralised architecture,
          dCDN drastically reduces data transfer and compute costs while
          enhancing load time. Join FanCloud’s dCDN network and experience the
          future of seamless, secure and community- driven consumption
        </p>
      </div>
    </div>
  );
};

export default FooterComp;
