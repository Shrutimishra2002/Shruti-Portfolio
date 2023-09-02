import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTech in Computer Science and Engineering"
            subTitle="National Institute of Technology,Patna (2021 - 2025)"
            result="8.68 cgpa"
            des="The current education is focused on pursuing a Bachelor of Technology (B.Tech) degree "
          />
          <ResumeCard
            title="High School Education"
            subTitle="Maharishi Vidya Mandir(2018)"
            result="91.8%"
            des="Completed high school at Maharishi Vidya Mandir in 2020 under the CBSE board, achieving a commendable 92%"
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Maharishi Vidya Mandir(2020)"
            result="92%"
            des="Completed secondary education in 2018 at Maharishi Vidya Mandir, adhering to the CBSE "
          />
        </div>
      </div>
     
    </motion.div>
  );
}

export default Education