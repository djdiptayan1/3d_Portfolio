import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import "../Cursor.css"
const ServiceCard = ({ index, title, icon }) => {
  return ( // Wrap the return statement in parentheses
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text0white text-[20px] font-bold text-center'>{title}</h3>

        </div>
      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}>
        <p className={`Spiderman ${styles.sectionSubText}`} > Introduction</p>
        <h2 className={`Spiderman ${styles.heroHeadText}`}>Overview</h2>
      </motion.div >
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='Spiderman mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Greetings! I'm Diptayan, a robotics aficionado currently pursuing a Computer Science & Engineering at SRM University. My journey is a captivating blend of technology and passion. From delving deep into microcontrollers by Texas Instruments, to seamlessly implementing MQTT protocols, and creating dynamic web applications using Flask and React, I thrive in the realm of embedded systems and web development.
        <br />
        <br />
        Beyond the tech world, I'm an ardent foodie, avid gamer, and a cinema enthusiast. Join me on this exciting exploration where innovation meets creativity, all on my captivating portfolio website.
      </motion.p>
      <div
        className='Spiderman mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")