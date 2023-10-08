import { EditorOptions } from '@tiptap/core'
import { Color } from '@tiptap/extension-color'
import { TextStyle } from '@tiptap/extension-text-style'
import { Highlight } from '@tiptap/extension-highlight'
import { TextAlign } from '@tiptap/extension-text-align'
import { Link } from '@tiptap/extension-link'
import { Underline } from '@tiptap/extension-underline'
import { StarterKit } from '@tiptap/starter-kit'
import { Placeholder } from '@tiptap/extension-placeholder'
import { TableCell } from '@tiptap/extension-table-cell'
import { TableHeader } from '@tiptap/extension-table-header'
import { TableRow } from '@tiptap/extension-table-row'
import { LinkBubbleMenuHandler, TableImproved } from 'mui-tiptap'
import { ListItem } from '@tiptap/extension-list-item'

import { useMemo } from 'react'

export type UseExtensionsOptions = {
  placeholder?: string
};

export default function useExtensions({placeholder}: UseExtensionsOptions = {}): EditorOptions["extensions"] {
  const CustomLinkExtension = Link.extend({
    inclusive: false,
  })

//TODO Add support for images
 return useMemo(() => {
   return [
     TableImproved.configure({
       resizable: true,
     }),
     TableRow,
     TableHeader,
     TableCell,
     StarterKit,
     Underline,
     TextAlign.configure({
       types: ["heading", "paragraph"],
     }),
     TextStyle,
     ListItem,
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
