import { Create } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { NewsContext } from '../../../lib/context'
import ArticlePreviewCard from './ArticlePreviewCard'

export default function NewsPanel () {
  const { push, pathname } = useRouter()
  const articles = useContext(NewsContext)

  return (
    <>
      <Button
        startIcon={<Create/>}
        variant='contained'
        onClick={() => push(`${pathname}/create-article`)}
      >
        Napsat článek
      </Button>
      <Box sx={{ my: '1rem', display: 'grid', gridTemplate: '1fr / repeat(4, 1fr)', gap: '1rem'}}>
        {articles ? articles.map(article => (
          <ArticlePreviewCard key={article.id} article={article}/>
        )) : null}
      </Box>
    </>
  )
}