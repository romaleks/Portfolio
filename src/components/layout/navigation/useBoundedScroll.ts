import { useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'

export const useBoudedScroll = () => {
  let { scrollY } = useScroll()

  const [status, setStatus] = useState<'hidden' | 'visible'>('visible')

  useEffect(() => {
    return scrollY.onChange(current => {
      let previous = scrollY.getPrevious()

      if (current < previous) setStatus('visible')
      else if (current > 100 && current > previous) setStatus('hidden')
    })
  }, [scrollY])

  return { status }
}
