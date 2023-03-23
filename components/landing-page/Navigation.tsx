import { useTranslation } from 'next-i18next'

export function Navigation() {
  const { t } = useTranslation('navigation')

  return (
    <>
      <h1>{ t('hello')}</h1>
    </>
  )
}
