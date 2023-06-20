import { animate, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, RefObject } from 'react'

export const useAnimatedCard = (cardRef: RefObject<HTMLDivElement>) => {
  // mouse position
  const mouseX = useMotionValue(
    typeof window !== 'undefined' ? window.innerWidth / 2 : 0
  )
  const mouseY = useMotionValue(
    typeof window !== 'undefined' ? window.innerHeight / 2 : 0
  )

  // handle mouse move on card
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // animate mouse x and y
      animate(mouseX, e.clientX)
      animate(mouseY, e.clientY)
    }

    const cardElement = cardRef.current
    // recalculate grid on resize
    cardElement?.addEventListener('mousemove', handleMouseMove)
    // cleanup
    return () => {
      cardElement?.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // rotation
  const dampen = 30
  const rotateX = useTransform<number, number>(mouseY, newMouseY => {
    if (!cardRef.current) return 0
    const rect = cardRef.current.getBoundingClientRect()
    const newRotateX = newMouseY - rect.top - rect.height / 2
    return -newRotateX / dampen
  })
  const rotateY = useTransform(mouseX, newMouseX => {
    if (!cardRef.current) return 0
    const rect = cardRef.current.getBoundingClientRect()
    const newRotateY = newMouseX - rect.left - rect.width / 2
    return newRotateY / dampen
  })

  return { rotateX, rotateY }
}
