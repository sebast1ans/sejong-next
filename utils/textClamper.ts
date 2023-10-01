export default function textClamper(text: string, numOfCharacters: number) {
  return text.length > numOfCharacters ? `${text.slice(0, numOfCharacters)}...` : text
}
