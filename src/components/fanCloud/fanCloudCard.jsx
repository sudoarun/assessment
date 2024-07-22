import React from "react";

const FanCloudCard = ({
  title,
  caption,
  buttonText,
  bgColor,
  textColor,
  blackPattern,
  comingSoon,
  soonbtnBgColor,
  soonBtnBorderColor,
}) => {
  return (
    <div
      style={{
        width: 400,
        height: 256,
        backgroundColor: bgColor ? bgColor : "#6B61FF",
        color: textColor ? textColor : "black",
      }}
      className="p-5 rounded-2xl relative"
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <h1 className="text-3xl font-semibold">{title && title}</h1>
          <p1 className="text-sm block mt-5">{caption && caption}</p1>
        </div>
        <div>
          {!comingSoon ? (
            <button className="px-6 py-2 rounded-3xl bg-white">
              <span className="flex items-center font-semibold text-black">
                {buttonText ? buttonText : "Deploy"}
                <img src="/nextBlack.svg" className="ms-1" />
              </span>
            </button>
          ) : (
            <span
              className="px-4 py-1 rounded-3xl absolute bottom-5 right-5 transform -rotate-12"
              style={{
                backgroundColor: soonbtnBgColor ? soonbtnBgColor : "#7A186F",
                border: `5px solid ${
                  soonBtnBorderColor ? soonBtnBorderColor : "#FFC4F8"
                }`,
                color: `${soonBtnBorderColor ? soonBtnBorderColor : "#FFC4F8"}`,
              }}
            >
              coming soon
            </span>
          )}
        </div>
      </div>
      {blackPattern ? (
        <img src="/blackPattern.svg" className="absolute bottom-0" />
      ) : (
        <img src="/Pattern.svg" className="absolute bottom-0" />
      )}
    </div>
  );
};

export default FanCloudCard;
