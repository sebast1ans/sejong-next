import { Html, Head, Main, NextScript } from 'next/document'
import { InferGetStaticPropsType } from 'next'

export default function Document({
  locale
} : InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Html lang={locale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export async function getStaticProps(context: { locale: string }) {
  const { locale } = context

  return {
    props: {
      locale
    },
  }
}
