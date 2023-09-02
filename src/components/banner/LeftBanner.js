import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Competitive Programmer.", "Full Stack Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });

    const githubUrl = 'https://drive.google.com/file/d/1oBtmWYrEkhuw4oWi72UPxPOljsulFggF/view?usp=sharing';
    const resumeUrl = 'https://github.com/Shrutimishra2002';

    const openLink = (url) => {
      window.open(url, '_blank');
    };
  

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Shruti Mishra</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a dedicated and innovative B.Tech student majoring in Computer Science and Engineering 
        at the National Institute of Technology Patna.I thrive on challenges and have excelled in competitive programming,
        reflected in my impressive ratings on platforms like Leetcode, Codeforces, and Codechef.
        </p>
        <div className="flex gap-4">
          {/* GitHub Button */}
          <button
            className="px-4 py-2 bg-designColor text-white rounded-md hover:bg-opacity-80 transition duration-300"
            onClick={() => openLink(githubUrl)}
          >
            GitHub
          </button>

          {/* Resume Button */}
          <button
            className="px-4 py-2 bg-designColor text-white rounded-md hover:bg-opacity-80 transition duration-300"
            onClick={() => openLink(resumeUrl)}
          >
            Resume
          </button>
        </div>
      </div>
     <Media />
    </div>
  );
}

export default LeftBanner