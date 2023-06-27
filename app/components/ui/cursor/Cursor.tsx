'use client'
import { FC, useState } from 'react'
import styles from './Cursor.module.scss'
import { motion } from 'framer-motion'
import useMouse from '@react-hook/mouse-position'
import { findDOMNode } from 'react-dom'

const Cursor: FC = () => {
  const [prevX, setPrevX] = useState<number>(0)
  const [prevY, setPrevY] = useState<number>(0)
  const [cursorVariant, setCursorVariant] = useState('hidden')

  const bodyRef = findDOMNode(document.body)

  const mouse = useMouse(bodyRef, {
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

  bodyRef?.addEventListener('mouseleave', handleLeaveScreen)
  bodyRef?.addEventListener('mouseenter', () => setCursorVariant('default'))

  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 28,
  }

  return (
    <motion.div
      className={styles.cursor}
      variants={variants}
      animate={cursorVariant}
      transition={spring}
      whileFocus={{ scale: 1.2 }}
    ></motion.div>
  )
}

export default Cursor
