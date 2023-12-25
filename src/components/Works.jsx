import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, Website_Icons } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import "../Cursor.css";
import Mouse_Click from "../assets/Mouse_Click.mp3";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  project_demo,
  source_code_link,
}) => {
  // AUDIO PLAY
  const Play_click = () => {
    const audio = new Audio(Mouse_Click);
    audio.volume = 0.35;
    audio.play();
  };

  const handleImageClick = () => {
    if (project_demo) {
      window.open(project_demo, "_blank");
    }
  };

  return (
    <motion.div variants={fadeIn("", "", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 250,
        }}
        className="bg-tertiary p-1 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <div
            className={`absolute inset-0 ${
              project_demo ? "nav-cursor" : ""
            } z-10`}
            onClick={handleImageClick}
          >
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl shadow-md"
            />
          </div>

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => {
                window.open(source_code_link, "_blank");
                Play_click();
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center nav-cursor z-20"
            >
              <img
                src={github}
                alt="source code"
                className="nav-cursor w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 px-2">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[16px]">{description}</p>
        </div>

        <div className=" p-2 mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  // AUDIO PLAY
  const Play_click = () => {
    const audio = new Audio(Mouse_Click);
    audio.volume = 0.35;
    audio.play();
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`StanLee font-Delicious ${styles.sectionSubText} `}>
          My work
        </p>
        <h2 className={`StanLee ${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="StanLee mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
        <span className="text-blue-400">
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            className="nav-cursor font-bold hover:text-xl"
            href="https://github.com/djdiptayan1"
            target="_blank"
            onClick={() => Play_click()}
          >
            {" "}
            View All Projects...
          </a>
        </span>
      </motion.p>

      <div className="StanLee mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
