import { useEffect, useState } from 'react'

export const useWindowScrolledOver = (pixels: number) => {
  const [scrolledOver, setScrolledOver] = useState(false)

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > pixels
        ? setScrolledOver(true)
        : setScrolledOver(false)
    }

    scrollHandler()
    document.addEventListener('scroll', scrollHandler)
    return () => document.removeEventListener('scroll', scrollHandler)
  }, [pixels])

  return scrolledOver
}
