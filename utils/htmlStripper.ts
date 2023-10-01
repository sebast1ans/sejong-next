export default function htmlStripper(htmlString: string) {
  return htmlString.replace(/<\/?[^>]+(>|$)|&(nbsp|#160|amp|#38|lt|#60|gt|#62);/g, ' ')
}
