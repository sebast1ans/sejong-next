import { Container } from '@mui/material'
import { Heading } from '../components/landing-page/Heading'
import { ArticlesList } from '../components/news/ArticlesList'

export default function News() {
  return (
    <Container>
      <Heading text='Novinky' />
      <ArticlesList />
    </Container>
  )
}
