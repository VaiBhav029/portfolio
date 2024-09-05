import React from 'react'
import { TypeAnimation } from 'react-type-animation';
const Animated = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Java Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Self Learner',
        1000,
        'Crafting Solutions',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
  )
}

export default Animated
