import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { DocumentData, doc, deleteDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { db } from '../../../lib/firebase'
import formatDate from '../../../utils/formatDate'
import htmlStripper from '../../../utils/htmlStripper'
import textClamper from '../../../utils/textClamper'
import DeleteIcon from '@mui/icons-material/Delete'
import EditNote from '@mui/icons-material/EditNote'
interface Props {
  article: DocumentData
}

export default function ArticlePreviewCard ({ article }: Props) {
  const { pathname, push, reload } = useRouter()

  const handleDeleteArticle = async (id: string) => {
    if (confirm("Opravdu chcete smazat tento článek?")) {
      await deleteDoc(doc(db, "news", id))
      reload()
    }

    return
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
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'end'
        }}
      >
        <Button
          variant='text'
          onClick={() => handleDeleteArticle(article.id)}
          startIcon={<DeleteIcon/>}
        >
          Delete
        </Button>
        <Button
          variant='text'
          color='warning'
          onClick={() => push(`${pathname}/edit-article/${article.id}`)}
          startIcon={<EditNote/>}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  )
}
