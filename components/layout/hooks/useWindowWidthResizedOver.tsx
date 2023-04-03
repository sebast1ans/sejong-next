import { useEffect, useState } from 'react'

export const useWindowWidthResizedOver = (pixels: number) => {
  const [resizedOver, setResizedOver] = useState(false)

  useEffect(() => {
    const resizeHandler = () => {
      window.innerWidth > pixels
        ? setResizedOver(true)
        : setResizedOver(false)
    }

    resizeHandler()
    window.addEventListener('resize', resizeHandler)
    return () => window.removeEventListener('resize', resizeHandler)
  }, [pixels])

  return resizedOver
}