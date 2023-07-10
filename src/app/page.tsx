import About from '@/components/sections/about/About'
import Projects from '@/components/sections/projects/Projects'

import styles from './styles.module.scss'

export default function Home() {
  return (
    <main className={styles.content}>
      <About />
      <Projects />
    </main>
  )
}
