import AnimatedCard from './components/ui/animated-card/AnimatedCard'
import Button from './components/ui/button/Button'
import RevealElement from './components/ui/reveal-element/RevealElement'
import styles from './styles.module.scss'

export default function Home() {
  return (
    <main>
      <div className={styles.content}>
        <div className={styles.about}>
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
    </main>
  )
}
