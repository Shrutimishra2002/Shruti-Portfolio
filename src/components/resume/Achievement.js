import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Academic Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech Academic Excellence"
            result="Success"
            des="Maintained an impressive CGPA of 8.68 while pursuing a B.Tech in Computer Science and Engineering at NIT Patna."
          />
          <ResumeCard
            title="High School Excellence"
            result="Success"
            des="Achieved an outstanding score of 92% in the high school examination conducted by the Central Board of Secondary Education, Uttar Pradesh, in 2020."
          />
          <ResumeCard
            title="Secondary School Achievement"
            result="Success"
            des="Secured a notable percentage of 91.8 in the secondary education examination, also conducted by the Central Board of Secondary Education, Uttar Pradesh, in 2018"
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Technical and Coding Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="CodeChef Excellence"
            result="Success"
            des="Achieved a highest rating of 1491 (2 stars) on CodeChef"
          />
          <ResumeCard
            title="Leetcode Proficiency"
            result="Success"
            des="Demonstrated exceptional coding skills with a Leetcode rating of 1684 (2.5 stars)"
          />
          <ResumeCard
            title="Codeforces Success"
            result="Success"
            des="Attained a Pupil rating on Codeforces, reaching a highest rating of 1347"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
