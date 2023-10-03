import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material'
import StarterKit from '@tiptap/starter-kit'
import {
  MenuButtonBold,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditor,
  type RichTextEditorRef
} from 'mui-tiptap'
import { useRef } from 'react'

interface Props {
  editMode?: boolean
}

export default function ArticleForm ({ editMode }: Props) {
  const rteRef = useRef<RichTextEditorRef>(null);

  return (
    <Container sx={{ my: '2rem' }}>
      <Paper elevation={2}>
        <Box
          component='form'
          sx={{
            p: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <Typography variant='h2'>{editMode ? 'Upravit článek' : 'Nový článek'}</Typography>
          <TextField
            type='text'
            color='info'
            label='Titulek'
            sx={{
              minWidth: '40rem'
            }}
          />
          <RichTextEditor
            ref={rteRef}
            extensions={[StarterKit]} // Or any Tiptap extensions you wish!
            content="<p>Hello world</p>" // Initial content for the editor
            // Optionally include `renderControls` for a menu-bar atop the editor:
            renderControls={() => (
              <MenuControlsContainer>
                <MenuSelectHeading />
                <MenuDivider />
                <MenuButtonBold />
                <MenuButtonItalic />
              </MenuControlsContainer>
            )}
          />
          <Button onClick={() => console.log(rteRef.current?.editor?.getHTML())}>
            Log HTML
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}
