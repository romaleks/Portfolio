import About from '@/components/sections/about/About'

import styles from './styles.module.scss'

export default function Home() {
  return (
    <main className={styles.content}>
      <About />
    </main>
  )
}
