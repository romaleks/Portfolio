import AnimatedCard from './components/ui/animated-card/AnimatedCard'
import styles from './styles.module.scss'

export default function Home() {
  return (
    <main className={styles.content}>
      <div className={styles.about}>
        <div className={styles.title}>
          <div>
            Hello from <span>Alex</span>,
          </div>
          <div>Web Developer</div>
        </div>
        <div className={styles.subtitle}>
          I'm a proffesional developer from Moscow
        </div>
      </div>
      <AnimatedCard
        title="Alexandr Romanov"
        image="/profile-photo.jpg"
        isLarge={true}
      />
    </main>
  )
}
