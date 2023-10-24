import Create from '@mui/icons-material/Create'
import { Card, Box, Button, Skeleton, CardContent, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { NewsContext } from '../../../lib/context'
import ArticlePreviewCard from './ArticlePreviewCard'

export default function NewsPanel () {
  const { push, pathname } = useRouter()
  const [articlesSnapshot, loading] = useContext(NewsContext)

  const ArticleSkeletons = () => {
    let skeletons = []

    for (let i = 0; i < 4; i++) {
      skeletons.push(
        <Card key={i}>
          <CardContent>
            <Typography variant='h3' mb='1rem'>
              <Skeleton/>
              <Skeleton width='80%'/>
            </Typography>
            <Skeleton variant='rectangular' height='10rem' sx={{  mb: '1rem' }}/>
            <Box display='flex' justifyContent='end'><Skeleton width='40%'/></Box>
          </CardContent>
        </Card>
      )
    }

    return (
      <>{skeletons.map(skeleton => skeleton)}</>
    )
  }

  return (
    <>
      <Button
        startIcon={<Create/>}
        variant='contained'
        onClick={() => push(`${pathname}/create-article`)}
      >
        Napsat článek
      </Button>
      <Box sx={{
        my: '1rem',
        display: 'grid',
        gap: '1rem',
        gridTemplate: {
          sm: '1fr / repeat(2, 1fr)',
          lg: '1fr / repeat(4, 1fr)'
        }
      }}
      >
        {!loading ?
          articlesSnapshot?.docs
            ? articlesSnapshot.docs.map(article => (
              <ArticlePreviewCard key={article.id} article={{ ...article.data(), id: article.id }}/>
            )) : (
              <p>Žádné články neexistují</p>
            ) : (
              <ArticleSkeletons />
            )
        }
      </Box>
    </>
  )
}
