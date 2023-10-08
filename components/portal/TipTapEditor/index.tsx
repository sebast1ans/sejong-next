import { StarterKit } from '@tiptap/starter-kit'
import { Underline } from '@tiptap/extension-underline'
import { ReactElement, useRef } from 'react'
import {
  MenuButtonBold, MenuButtonItalic, MenuButtonStrikethrough,
  MenuButtonUnderline,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditor,
  type RichTextEditorRef
} from 'mui-tiptap'
import { FieldValues, UseFormReturn, useFormContext, Controller } from 'react-hook-form'
import { ArticleFormInputs } from '../ArticleForm'
import ClientOnly from '../ClientOnly'

interface ConnectFormProps<TFieldValues extends FieldValues> {
  children (children: UseFormReturn<TFieldValues>): ReactElement;
}

const ConnectForm =
  <TFieldValues extends FieldValues> ({ children }: ConnectFormProps<TFieldValues>) => {
    const methods = useFormContext<TFieldValues>();
    return children({ ...methods });
  };

export default function TipTapEditor () {
  const rteRef = useRef<RichTextEditorRef>(null)

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
                extensions={[StarterKit, Underline]}
                renderControls={() =>
                  <MenuControlsContainer>
                    <MenuSelectHeading/>
                    <MenuDivider/>
                    <MenuButtonBold/>
                    <MenuButtonItalic/>
                    <MenuButtonUnderline/>
                    <MenuButtonStrikethrough/>
                  </MenuControlsContainer>
                }
              />
            }
          />
        }
      </ConnectForm>
    </ClientOnly>
  )
}
