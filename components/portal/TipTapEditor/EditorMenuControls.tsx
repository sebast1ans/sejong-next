import {
  LinkBubbleMenu, MenuButtonAddTable,
  MenuButtonBold, MenuButtonBulletedList, MenuButtonEditLink, MenuButtonHighlightColor, MenuButtonHorizontalRule,
  MenuButtonItalic, MenuButtonOrderedList,
  MenuButtonRedo, MenuButtonStrikethrough, MenuButtonUnderline,
  MenuButtonUndo, MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading, TableBubbleMenu
} from 'mui-tiptap'

export default function EditorMenuControls () {
  return (
    <MenuControlsContainer>
      <MenuButtonUndo/>
      <MenuButtonRedo/>
      <MenuDivider/>
      <MenuSelectHeading/>
      <MenuDivider/>
      <MenuButtonBold/>
      <MenuButtonItalic/>
      <MenuButtonUnderline/>
      <MenuButtonStrikethrough/>
      <MenuButtonHorizontalRule/>
      <MenuButtonHighlightColor
        swatchColors={[
          { value: "#595959", label: "Dark grey" },
          { value: "#dddddd", label: "Light grey" },
          { value: "#ffa6a6", label: "Light red" },
          { value: "#ffd699", label: "Light orange" },
          { value: "#ffff00", label: "Yellow" },
          { value: "#99cc99", label: "Light green" },
          { value: "#90c6ff", label: "Light blue" },
          { value: "#8085e9", label: "Light purple" },
        ]}
      />
      <MenuDivider/>
      <LinkBubbleMenu/>
      <MenuButtonEditLink/>
      <MenuDivider/>
      <MenuButtonOrderedList/>
      <MenuButtonBulletedList/>
      <MenuDivider/>
      <MenuButtonAddTable />
      <TableBubbleMenu />
    </MenuControlsContainer>
  )
}
