import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const TechStack = () => {
    return (
        <motion.section
            variants={fadeIn("up", "spring", 0.5, 0.5)}
            className="py-16"
        >
            <div className="flex flex-row flex-wrap justify-center gap-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
                    {technologies.map((technology) => (
                        <Tilt
                            key={technology.name}
                            options={{
                                max: 45,
                                scale: 1,
                                speed: 450,
                            }}
                        >
                            <div className="bg-white p-4 bg-opacity-25 rounded-full h-28 w-28 shadow-lg flex items-center justify-center text-center text-white transform transition-transform hover:scale-125">
                                <img src={technology.icon} className="h-16 mx-auto" />
                            </div>


                        </Tilt>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default SectionWrapper(TechStack, "");
