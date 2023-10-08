import { ReactElement, useRef } from 'react'
import {
  RichTextEditor,
  type RichTextEditorRef
} from 'mui-tiptap'
import EditorMenuControls from './EditorMenuControls'
import { FieldValues, UseFormReturn, useFormContext, Controller } from 'react-hook-form'
import { ArticleFormInputs } from '../ArticleForm'
import ClientOnly from '../ClientOnly'
import useExtensions from './useExtensions'

interface ConnectFormProps<TFieldValues extends FieldValues> {
  children (children: UseFormReturn<TFieldValues>): ReactElement
}

const ConnectForm = <TFieldValues extends FieldValues> ({ children }: ConnectFormProps<TFieldValues>) => {
    const methods = useFormContext<TFieldValues>()
    return children({ ...methods })
  }

export default function TipTapEditor () {
  const rteRef = useRef<RichTextEditorRef>(null)
  const extensions = useExtensions({
    placeholder: "Zde napište článek...",
  })

  return (
    <ClientOnly>
      <ConnectForm<ArticleFormInputs>>
        {({ control }) =>
          <Controller
            control={control}
            name="content"
            render={({ field: { onChange, onBlur } }) =>
              <RichTextEditor
                ref={rteRef}
                onUpdate={() => onChange(rteRef?.current?.editor?.getHTML())}
                onBlur={onBlur}
                extensions={extensions}
                renderControls={() => <EditorMenuControls/>}
              />
            }
          />
        }
      </ConnectForm>
    </ClientOnly>
  )
}
