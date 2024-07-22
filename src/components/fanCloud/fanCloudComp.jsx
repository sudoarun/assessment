import React from "react";
import FanCloudCard from "./fanCloudCard";
import Globe from "./globe";
import { fanCloudCardObj } from "@/utils/fanCloudCompData";

const FanCloudComp = () => {
  return (
    <div className="text-white p-3" style={{ backgroundColor: "#2A2A2B" }}>
      <div>
        <h1 className="text-center font-semibold text-3xl">
          FanCloud CDN network revolutionizes video infrastructure <br /> with
          community-driven Innovation
        </h1>
        <div className="flex justify-center mt-5">
          <p className=" text-center text-sm w-2/3">
            FanCloud pioneers a new era of connectivity with its decentralised
            content delivery network (dCDN), leveraging a global network of
            community-powered nodes. By harnessing a decentralised architecture,
            dCDN drastically reduces data transfer and compute costs while
            enhancing load time. Join FanCloud’s dCDN network and experience the
            future of seamless, secure and community- driven consumption
          </p>
        </div>
        <div>
          <Globe />
        </div>
        <div className="flex justify-center gap-3 py-5">
          {fanCloudCardObj.map((el, index) => (
            <FanCloudCard
              key={index}
              title={el.title}
              caption={el.caption}
              bgColor={el.bgColor}
              textColor={el.textColor}
              blackPattern={el.blackPattern}
              comingSoon={el.comingSoon}
              soonbtnBgColor={el.soonbtnBgColor}
              soonBtnBorderColor={el.soonBtnBorderColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FanCloudComp;
