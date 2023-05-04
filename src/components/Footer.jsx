import React from "react";
import { ImLinkedin } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-tertiary w-full py-4 flex flex-col text-center gap-4 justify-center items-center font-normal text-[12px] text-secondary">
      <div className="flex gap-2">
        <ImLinkedin
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/mohamed-ashraf-44ba5419b/",
              "_blank"
            )
          }
          className="text-secondary hover:text-white w-[20px] h-[20px] cursor-pointer"
        />
        <AiFillGithub
          onClick={() =>
            window.open("https://github.com/MohamedAshraf2222", "_blank")
          }
          className="text-secondary hover:text-white  w-[20px] h-[20px] cursor-pointer"
        />
      </div>
      Copyright -2023 developed by Mohamed Ashraf. All rights reserved.
    </footer>
  );
};

export default Footer;
