import { RefObject, useEffect } from 'react'

export const useOutsideClicker = (ref: RefObject<HTMLElement>, isWindowWidthOver: boolean, callback: () => void) => {
  useEffect(() => {
    if (isWindowWidthOver) return
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, isWindowWidthOver])
}