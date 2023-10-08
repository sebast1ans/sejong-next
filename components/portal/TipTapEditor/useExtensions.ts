import { EditorOptions } from '@tiptap/core'
import { Color } from '@tiptap/extension-color'
import { Highlight } from '@tiptap/extension-highlight'
import { Link } from '@tiptap/extension-link'
import { Underline } from '@tiptap/extension-underline'
import { StarterKit } from '@tiptap/starter-kit'
import { LinkBubbleMenuHandler } from 'mui-tiptap'
import { Placeholder } from "@tiptap/extension-placeholder";

import { useMemo } from 'react'

export type UseExtensionsOptions = {
  placeholder?: string
};

export default function useExtensions({placeholder}: UseExtensionsOptions = {}): EditorOptions["extensions"] {
  const CustomLinkExtension = Link.extend({
    inclusive: false,
  })

 return useMemo(() => {
   return [
     StarterKit,
     Underline,
     Color,
     CustomLinkExtension.configure({
       autolink: true,
       linkOnPaste: true,
       openOnClick: false,
     }),
     LinkBubbleMenuHandler,
     Highlight.configure({ multicolor: true }),
     Placeholder.configure({
       placeholder,
     }),
   ]
 }, [CustomLinkExtension, placeholder])
}
