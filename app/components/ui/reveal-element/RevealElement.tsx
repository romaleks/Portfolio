'use client'

import { motion } from 'framer-motion'
import { FC, PropsWithChildren } from 'react'

const RevealElement: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: 75,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <div className="relative overflow-hidden">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default RevealElement
