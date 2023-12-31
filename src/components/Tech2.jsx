import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";
import "../Cursor.css";

const TechStack = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
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
              <img src={technology.icon} className="lg:h-16 md:h-20 mx-auto" />
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(TechStack, "");
