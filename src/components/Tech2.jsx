import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant, zoomIn, slideIn } from "../utils/motion";
import "../Cursor.css";
import Hover_Sound from "../assets/Hover_Sound_Effects.mp3";

const TechStack = () => {
  // AUDIO PLAY
  const Play_click = () => {
    const audio = new Audio(Hover_Sound);
    audio.volume = 0.15;
    audio.play();
  };
  return (
    <motion.section variants={fadeIn("", "", 0.1, 1)} className="py-1">
      <div className="flex flex-row flex-wrap justify-center gap-10">
        <div
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10"
          onMouseOver={Play_click}
        >
          {technologies.map((technology) => (
            <Tilt
              key={technology.name}
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
            >
              <div
                className="ironman bg-white p-4 bg-opacity-25 rounded-full h-20 w-20 lg:h-28 lg:w-28 md:h-28 md:w-28 shadow-lg flex items-center justify-center text-center text-white transform transition-transform hover:scale-125"
                style={{
                  boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)", // Add a shadow to the perimeter of the logos
                }}
              >
                <img
                  src={technology.icon}
                  className="lg:h-16 md:h-20 mx-auto"
                />
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SectionWrapper(TechStack, "");
