import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Weather App"
          des=" Application designed to provide users with up-to-date and accurate information about current and forecasted weather conditions for specific locations. "
          src={projectOne}
        />
    
        <ProjectsCard
          title="Analog Clock"
          des=" Digital representation of a classic clock with hour, minute, and sometimes second hands. It displays the current time in a visually familiar way"
          src={projectTwo}
        />
        <ProjectsCard
          title="Gym App"
          des=" Gym website features a user-friendly interface where visitors can enter their personal details, including their name, age, gender, and locality"
          src={projectThree}
        />
        <ProjectsCard
          title="To Do list"
          des=" Enables users to create, read, update, and delete tasks or to-do items, providing a flexible and efficient way to manage their responsibilities and stay organized."
          src={projectFour}
        />
        <ProjectsCard
          title="Portfolio"
          des=" A personalized online platform where you showcase your unique talents, projects, skills, and accomplishments ans details"
          src={projectFive}
        />
        <ProjectsCard
          title="Food Deleivery Website"
          des="  Provides an appealing and user-friendly platform for customers to explore a variety of restaurants and cuisines, order food, and make secure payments online"
          src={projectSix}
        />
      </div>
    </section>
  );
}

export default Projects