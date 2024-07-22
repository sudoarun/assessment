import React from "react";

const Globe = () => {
  return (
    <div className="flex justify-center py-28">
      <div
        style={{
          backgroundImage: "url(/globe.svg)",
          height: 400,
          width: 526,
          backgroundSize: "contain",
        }}
        className="relative"
      >
        <div className="absolute circle"></div>

        <img src="/profile/1.png" className="absolute bottom-0 -left-44 z-10" />
        <img src="/profile/2.png" className="absolute bottom-5 -left-24 z-10" />
        <img src="/profile/3.png" className="absolute top-24 -left-16" />
        <img src="/profile/4.png" className="absolute top-3 left-3" />
        <img src="/profile/5.png" className="absolute -top-16 left-28" />
        <img src="/profile/6.png" className="absolute -top-16 right-44" />
        <img src="/profile/8.png" className="absolute -top-8 right-10" />
        <img src="/profile/9.png" className="absolute top-24 -right-16 z-10" />
        <img src="/profile/10.png" className="absolute bottom-16 -right-20 " />
        <div
          className="absolute -right-28 top-20 border-dashed border-2 rounded-full"
          style={{ height: 100, width: 100, borderColor: "#ADFFE4" }}
        >
          <img src="/profile/7.png" className="absolute -top-8 right-3" />
          <img src="/profile/11.png" className="absolute -bottom-5 -right-6" />
        </div>
        <img src="/ellipse.svg" className="absolute bottom-3 -left-36" />
      </div>
    </div>
  );
};

export default Globe;
