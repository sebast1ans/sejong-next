import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { DocumentData, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../../../lib/firebase'
import formatDate from '../../../utils/formatDate'
import htmlStripper from '../../../utils/htmlStripper'
import textClamper from '../../../utils/textClamper'

interface Props {
  article: DocumentData
}

export default function ArticlePreviewCard ({ article }: Props) {
  const handleDeleteArticle = async (id: string) => {
    await deleteDoc(doc(db, "news", id))
    console.log('deleted')
  }

  return (
    <Card
      elevation={2}
      key={article.id}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: '1.1rem', textWrap: 'balance' }}
        >
          {textClamper(article.title, 68)}
        </Typography>
        <Typography variant={'body2'} sx={{ color: 'dimgray', mb: '1rem' }}>
          <em>{formatDate(article.updatesTimestamp?.slice(-1), 'cs')}</em>
        </Typography>
        <Typography
          variant={'body2'}
          sx={{ color: 'dimgray', }}
        >
          {textClamper(htmlStripper(article.content), 222)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant='outlined'
          onClick={() => handleDeleteArticle(article.id)}
        >
         Delete
        </Button>
      </CardActions>
    </Card>
  )
}
