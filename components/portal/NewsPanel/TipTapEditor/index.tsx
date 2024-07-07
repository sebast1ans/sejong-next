import { Box } from '@mui/material'
import { useEffect, useRef, Dispatch, SetStateAction } from 'react'
import {
  RichTextEditor,
  type RichTextEditorRef
} from 'mui-tiptap'
import { ImageWithId } from '../ArticleForm'
import EditorMenuControls from './EditorMenuControls'
import { useFormContext, Controller } from 'react-hook-form'
import ClientOnly from '../../ClientOnly'
import useExtensions from './useExtensions'


export default function TipTapEditor ({ setImages }: { setImages: Dispatch<SetStateAction<ImageWithId[]>> }) {
  const {
    control,
    formState,
    getValues
  } = useFormContext()
  const rteRef = useRef<RichTextEditorRef | null>(null)
  const extensions = useExtensions({
    placeholder: "Zde napište článek...",
  })

  useEffect(() => {
    if (!formState.isDirty) {
      rteRef.current?.editor?.commands.setContent(getValues('content'))
    }
  }, [formState.isDirty, getValues]);

  return (
    <ClientOnly>
      <Controller
        control={control}
        name="content"
        render={({ field: { onChange, onBlur, ref, value } }) =>
          <Box sx={{ zIndex: '2', '& > div': { backgroundColor: 'white', }}}>
            {/*TODO change focus color*/}
            <RichTextEditor
              content={value}
              ref={(e) => {
                ref(e)
                rteRef.current = e
              }}
              onUpdate={() => onChange(rteRef.current?.editor?.getHTML())}
              onBlur={onBlur}
              extensions={extensions}
              renderControls={() => <EditorMenuControls setImages={setImages}/>}
            />
          </Box>
        }
      />
    </ClientOnly>
  )
}
