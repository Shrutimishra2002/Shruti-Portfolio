import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Position And Responsibility</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Team Member"
            subTitle="Tesla Club - (2022 - Present)"
            result="NIT Patna"
            des="A dynamic student organization at the National Institute of Technology Patna dedicated to fostering innovation and technological awareness"
          />
          <ResumeCard
            title="Team Leader"
            subTitle="American Express Makeathon 2023"
            result="Hackathon"
            des="An exciting and collaborative innovation event hosted by American Express, where creative minds come together to tackle real-world challenges"
          />
          <ResumeCard
            title="Team Member"
            subTitle="National Service Scheme - (2021 - Present)"
            result="NIT Patna"
            des="NSS is a nationwide volunteer program that engages students in community service and social activities."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
