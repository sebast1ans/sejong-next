import { StarterKit } from '@tiptap/starter-kit'
import { Underline } from '@tiptap/extension-underline'

import { useRef } from 'react'
import {
  MenuButtonBold, MenuButtonItalic, MenuButtonStrikethrough,
  MenuButtonUnderline,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditor,
  type RichTextEditorRef
} from 'mui-tiptap'
import ClientOnly from '../ClientOnly'

export default function TipTapEditor () {
  const rteRef = useRef<RichTextEditorRef>(null)

  return (
    <ClientOnly>
      <RichTextEditor
        ref={rteRef}
        extensions={[StarterKit, Underline]}
        content="<p>Hello world</p>"
        renderControls={() => (
          <MenuControlsContainer>
            <MenuSelectHeading/>
            <MenuDivider/>
            <MenuButtonBold/>
            <MenuButtonItalic/>
            <MenuButtonUnderline/>
            <MenuButtonStrikethrough />
          </MenuControlsContainer>
        )}
      />
    </ClientOnly>
  )
}
