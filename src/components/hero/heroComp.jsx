import React from "react";
import Card from "./card";

const HeroComp = () => {
  return (
    <div
      className="flex justify-center flex-col pb-28"
      style={{
        backgroundImage: "url(/grid_lines.svg)",
        backgroundSize: "cover",
      }}
    >
      <div className="">
        <div className="text-center mt-40">
          <h1
            className="font-bold text-5xl text-white uppercase gradientText"
            style={{ lineHeight: "80px" }}
          >
            Empowering the Digital Era:
            <br />
            Decentarlizing Entertainment
          </h1>
          <h6
            style={{ color: "#D2D2D2" }}
            className="text-sm text-center mt-10"
          >
            Join the world’s first DePIN: Revolutionizing Content Streaming with
            faster, Safer <br /> and Cheaper Access
          </h6>
          <button
            className="px-5 py-2 text-white rounded-3xl mt-5"
            style={{ backgroundColor: "#6C5FF5" }}
          >
            <span className="flex items-center gap-2">
              Coming Soon <img src="/Vector.svg" />
            </span>
          </button>
        </div>
        <div className="relative">
          <h1 className="" style={{ height: 300 }}></h1>
          <img src="/image1.png" className="absolute top-0" width={250} />
          <img
            src="/image2.png"
            className="absolute top-0 left-72"
            width={150}
          />
          <img src="/pinkquote.svg" className="absolute top-0 left-72" />
          <img
            src="/image3.png"
            className="absolute top-5"
            style={{ left: "28rem" }}
            width={250}
          />
          <img
            src="/greenquote.svg"
            className="absolute bottom-28"
            style={{ left: "30rem" }}
          />
          <img
            src="/image4.png"
            className="absolute top-0 right-64"
            width={200}
          />
          <img
            src="/greenblink.svg"
            className="absolute bottom-24"
            style={{ right: "26rem" }}
          />
          <img
            src="/image5.png"
            className="absolute bottom-0 right-80"
            width={150}
          />
          <img
            src="/image6.png"
            className="absolute bottom-0 right-0"
            width={200}
          />
          <img
            src="/blueCircle.svg"
            className="absolute "
            style={{ top: "-460px" }}
          />
        </div>
      </div>
      <div className="flex gap-5 justify-center mt-5">
        <Card title={"No. of Node Operators"} number={"2000"} />
        <Card
          title={"Data Transferred in TB"}
          smTitle={"(last 30 days)"}
          number={"12,000"}
        />
      </div>
    </div>
  );
};

export default HeroComp;
