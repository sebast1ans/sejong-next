export function getPropertyWithSuffix (baseName: string, suffix?: string) {
  const suffixCap = suffix ? suffix[0].toUpperCase() + suffix.slice(1) : ''

  return `${baseName}${suffixCap}`
}
