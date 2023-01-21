import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { AppWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './Skills.scss'

const Skills = () => {
  const [experience, setExperience] = useState([])
  const [skills, setSkills] = useState([])
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setanimateCard] = useState({ y:0, opacity: 1})
  
  useEffect(() => {
    const query = '*[_type == "experiences"]'
    const skillsQuery = '*[_type == "skills"]'

    client.fetch(query)
    .then((data) => {
      setExperience(data)
    })

    client.fetch(skillsQuery)
    .then((data) => {
      setSkills(data)
    })
  }, [])

  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills?.map((skill) => (
            <motion.div
              whileInView={{opacity: [0, 1]}}
              transition={{duration: 0.5}}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className='app__skills-exp'>
            {experience?.map((experience, index2) => (
              <motion.div
                className='app__skills-exp-item'
                key={experience.year}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                
                <motion.div className='app__skills-exp-works'>
                  {experience.works.map((work, index) => (
                    <>
                      <motion.div
                        whileInView={{opacity: [0, 1]}}
                        transition={{duration: 0.5}}
                        className='app__skills-exp-work'
                        data-tip
                        data-for={work.name}
                        key={work.name}
                      >
                        <h4 id={`atribute-${index2}`} data-tooltip-content={work.desc} className='bold-text'>{work.name}</h4>
                        <p className='p-text'>{work.company}</p>

                        
                        <ReactTooltip 
                          anchorId={`atribute-${index2}`}
                          id={work.name}
                          effect="solid"
                          arrowColor="#fff"                          
                          className="skills-tooltip" 
                        />

                      </motion.div>

                      {/* <ReactTooltip
                        key={`${work.name}-2`}
                        id={work.name}
                        effect="solid"
                        arrowColor="#fff"
                        data-tooltip-content="hello world!"
                        className="skills-tooltip"                        
                      >
                        {work.desc}
                        
                      </ReactTooltip> */}
                      
                      

                      {/* <ReactTooltip anchorId={`atribute-${index2}`} key={`key-${index2}`}></ReactTooltip>
                        <a id={`atribute-${index2}`} data-tooltip-content={work.desc}> ◕‿‿◕ </a>
                      <ReactTooltip/> */}
                      
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
            
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(Skills, 'skills')