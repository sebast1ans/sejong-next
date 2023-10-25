import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { DocumentData } from 'firebase/firestore'
import { useRouter } from 'next/router'
import formatDate from '../../../utils/formatDate'
import htmlStripper from '../../../utils/htmlStripper'
import textClamper from '../../../utils/textClamper'
import DeleteIcon from '@mui/icons-material/Delete'
import EditNote from '@mui/icons-material/EditNote'
import Circle from '@mui/icons-material/Circle'
import { handleDelete } from './ArticleForm'

interface Props {
  article: DocumentData
}

export default function ArticlePreviewCard ({ article }: Props) {
  const { pathname, push } = useRouter()

  return (
    <Card
      elevation={0}
      variant='outlined'
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
          <Circle color={article.isPublished ? 'success' : 'warning'} sx={{ fontSize: '.5rem', mr: '4px', mb: '4px'}}/>
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
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'end'
        }}
      >
        <Button
          variant='text'
          onClick={() => handleDelete(article.id)}
          startIcon={<DeleteIcon/>}
        >
          Smazat
        </Button>
        <Button
          variant='text'
          color='warning'
          onClick={() => push(`${pathname}/edit-article/${article.id}`)}
          startIcon={<EditNote/>}
        >
          Upravit
        </Button>
      </CardActions>
    </Card>
  )
}
