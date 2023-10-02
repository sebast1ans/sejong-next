import { ArticleOutlined, Newspaper } from '@mui/icons-material'
import CloseIcon from '@mui/icons-material/Close'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container, Dialog, DialogContent, IconButton,
  Paper,
  Typography,
  useMediaQuery
} from '@mui/material'
import { DocumentData } from 'firebase/firestore'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { NewsContext } from '../../lib/context'
import formatDate from '../../utils/formatDate'
import htmlStripper from '../../utils/htmlStripper'
import textClamper from '../../utils/textClamper'
import { ArticleCard } from '../news/ArticleCard'
import { Heading } from './Heading'
import styles from './News.module.scss'
import { theme } from '../../styles/mui-theme'


interface ArticleDialogProps {
  open: boolean,
  onClose: () => void
  article: DocumentData | null
}

const ArticleDialog = ({ open, onClose, article }: ArticleDialogProps) => {

  return (
    <Dialog open={open} onClose={onClose} PaperProps={{sx: { maxWidth: '50rem'}}}>
      {article ? (
          <>
            <DialogContent
              dividers
              sx={{
                display: 'flex',
                alignItems: 'center',
                overflowY: 'unset',
                padding: '.7rem'
              }}
            >
              <ArticleOutlined fontSize='large'/>
              <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{marginLeft: 'auto'}}
              >
                <CloseIcon/>
              </IconButton>
            </DialogContent>
            <DialogContent sx={{ padding: '0'}}>
              <ArticleCard article={article} inDialog />
            </DialogContent>
          </>
      ) : null}
    </Dialog>

  )
}

const NewsPanel = () => {
  const { t } = useTranslation('news')
  const { locale, push } = useRouter()
  const articles = useContext(NewsContext)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [articleDialogData, setArticleDialogData] = useState<DocumentData | null>(null)
  const lessThanSm = useMediaQuery(theme.breakpoints.down('sm'))

  const handleClickOpen = (article: DocumentData) => {
    setArticleDialogData(article)
    setDialogOpen(true)
  }

  const handleClose = () => {
    setArticleDialogData(null)
    setDialogOpen(false)
  }

  return (
    <>
      <Paper
        elevation={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box className={styles.newsPanel}>
          {articles ? articles.slice(0, lessThanSm ? 2 : 4).map(article => (
            <Card
              elevation={0}
              key={article.id}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <CardContent
                onClick={() => handleClickOpen(article)}
                sx={{ cursor: 'pointer' }}
              >
                <Typography
                  sx={{ fontSize: '1.1rem', textWrap: 'balance' }}
                  // onClick={() => push(`/news/${article.slug}`)}
                >
                  {textClamper(article.title, 68)}
                </Typography>
                <Typography variant={'body2'} sx={{ color: 'dimgray', mb: '1rem' }}>
                  <em>{formatDate(article.updatesTimestamp.slice(-1), locale)}</em>
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
                  size='small'
                  onClick={() => push(`/news/${article.slug}`)}
                  startIcon={<ArticleOutlined/>}
                >
                  {t('fullArticle')}
                </Button>
              </CardActions>
            </Card>
          )) : null}
        </Box>
        <Button
          sx={{ mb: '.8rem', mr: '1rem', alignSelf: 'end' }}
          onClick={() => push(`/news`)}
          startIcon={<Newspaper/>}
        >
          {t('allArticles')}
        </Button>
      </Paper>
      <ArticleDialog open={dialogOpen} onClose={handleClose} article={articleDialogData}/>
    </>
  )
}

export default function News () {
  const { t } = useTranslation('news')

  return (
    <section id='news'>
      <Heading text={t('news')}/>
      <Container>
        <NewsPanel/>
      </Container>
    </section>
  )
}
