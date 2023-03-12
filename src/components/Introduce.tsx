import React from "react";

export default function Introduce() {
  const helpList = ["당신", "팀원", "사용자", "사람", "당신", "팀원", "사용자"];
  return (
    <div className="h-[500px] mt-[60px] px-[30px] py-[100px] flex flex-col items-end font-[700] text-[45px] text-text-black">
      <div>
        <div className="absolute z-40 right-[490px] w-[130px] h-[68px] bg-white bg-opacity-90"></div>
        안녕하세요
      </div>

      <div className="absolute right-[490px] w-[130px] h-[200px] overflow-hidden">
        {helpList.map((helper, index) => (
          <p key={index} className="flex justify-end animate-up text-blue-600">
            {helper}
          </p>
        ))}
      </div>
      <p className="">에게 도움이 되는 개발자,</p>
      <div className="flex">
        <div className="absolute right-[490px] w-[130px] h-[68px] bg-white bg-opacity-90"></div>
        <p className="text-blue-600">권민영</p>입니다
      </div>
    </div>
  );
}
