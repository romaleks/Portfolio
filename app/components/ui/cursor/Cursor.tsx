'use client'
import { FC, useState, useRef } from 'react'
import styles from './Cursor.module.scss'
import { motion } from 'framer-motion'
import useMouse from '@react-hook/mouse-position'

const Cursor: FC = () => {
  const [prevX, setPrevX] = useState(0)
  const [prevY, setPrevY] = useState(0)
  const [cursorVariant, setCursorVariant] = useState('hidden')
  const ref = useRef(null)

  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  })

  let mouseXPosition = prevX
  let mouseYPosition = prevY

  if (mouse.clientX !== null) {
    mouseXPosition = mouse.clientX - 16
  }

  if (mouse.clientY !== null) {
    mouseYPosition = mouse.clientY - 16
  }

  const variants = {
    default: {
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
    hidden: {
      x: prevX,
      y: prevY,
      scale: 0,
      transition: 'hidden',
    },
  }

  const handleLeaveScreen = () => {
    setPrevX(mouse.clientX)
    setPrevY(mouse.clientY)
    setCursorVariant('hidden')
  }

  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 28,
  }

  return (
    <div
      className={styles.container}
      ref={ref}
      onMouseLeave={handleLeaveScreen}
      onMouseEnter={() => setCursorVariant('default')}
    >
      <motion.div
        className={styles.cursor}
        variants={variants}
        animate={cursorVariant}
        transition={spring}
      ></motion.div>
    </div>
  )
}

export default Cursor
