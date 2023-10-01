export default function formatDate(timestamp: number, locale?: string ) {
  return Intl.DateTimeFormat(locale, {dateStyle: 'long'}).format(timestamp)
}
