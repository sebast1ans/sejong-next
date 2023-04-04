import { RefObject, useEffect } from 'react'

export const useOutsideClicker = (
  ref: RefObject<HTMLElement>,
  isWindowWidthOver: boolean,
  isLanguageSelectorOpen: boolean,
  callback: () => void
) => {
  useEffect(() => {
    if (isWindowWidthOver || isLanguageSelectorOpen) return
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, isWindowWidthOver, isLanguageSelectorOpen])
}