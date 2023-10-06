import { useRef } from 'react'
import {
  MenuButtonBold, MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditor,
  type RichTextEditorRef
} from 'mui-tiptap'
import StarterKit from '@tiptap/starter-kit'
import ClientOnly from './ClientOnly'

export default function TipTapEditor () {

  const rteRef = useRef<RichTextEditorRef>(null);


  return (
    <ClientOnly>
      <RichTextEditor
        ref={rteRef}
        extensions={[StarterKit]} // Or any Tiptap extensions you wish!
        content="<p>Hello world</p>" // Initial content for the editor
        // Optionally include `renderControls` for a menu-bar atop the editor:
        renderControls={() => (
          <MenuControlsContainer>
            <MenuSelectHeading/>
            <MenuDivider/>
            <MenuButtonBold/>
            <MenuButtonItalic/>
            {/* Add more controls of your choosing here */}
          </MenuControlsContainer>
        )}
      />
    </ClientOnly>
  )
}
