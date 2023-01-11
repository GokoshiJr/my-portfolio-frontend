import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import './About.scss'

import { urlFor, client } from '../../client'

const abouts = [
  { 
    title: 'Web Development', 
    description: 'I am a good web developer', 
    imgUrl: images.about01
  },
  { 
    title: 'Backend', 
    description: 'I am a good web developer', 
    imgUrl: images.about02
  },
  { 
    title: 'Database Desing', 
    description: 'I am a good web developer', 
    imgUrl: images.about03
  },
  { 
    title: 'Database Desing', 
    description: 'I am a good web developer', 
    imgUrl: images.about04
  }
]

const About = () => {
  const [abouts, setAbouts] = useState([])
  
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
      .then((data) => setAbouts(data))
  }, [])
  
  return (
    <>
      <h2 className='head-text'>
        I Know that
        <span> Good Apps</span>
        <br />
        Means
        <span> Good Business</span>

        <div className="app__profiles">
          {abouts.map((about, index) => 
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profile-item"
              key={ about.title + index }
            >
              <img src={ urlFor(about.imgUrl) } alt={ about.title } />
              <h2 className="bold-text" style={{ marginTop: 20 }}>{ about.title }</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{ about.description }</p>
            </motion.div>
          )}
        </div>
      </h2>
    </>
  )
}

export default About