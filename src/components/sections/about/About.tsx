import { FC } from 'react'

import AnimatedCard from '@/components/ui/animated-card/AnimatedCard'
import Button from '@/components/ui/button/Button'
import RevealElement from '@/components/ui/reveal-element/RevealElement'

import styles from './About.module.scss'

const About: FC = () => {
  return (
    <div className={styles.about}>
      <div className={styles.text}>
        <RevealElement>
          <div className={styles.title}>
            Hello from <span>Alex</span>,<div>Web Developer</div>
          </div>
        </RevealElement>

        <RevealElement>
          <div className={styles.subtitle}>
            I'm a proffesional developer from Moscow
          </div>
        </RevealElement>

        <Button title="See projects" link="#projects" />
      </div>
      <AnimatedCard
        title="Alexandr Romanov"
        image="/profile-photo.jpg"
        isLarge={true}
      />
    </div>
  )
}

export default About
