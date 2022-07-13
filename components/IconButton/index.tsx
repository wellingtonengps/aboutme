import Image from "next/image"
import { Container } from "./styles"

type IconPorps = {
  Icon?: "github" | "linkedin" | "email" | "spotify"
}

const IconButton = (props: IconPorps) => {
  return (
    <Container >
      <Image className="image" height={40} width={40} src={`/${props.Icon}.svg`} alt="Logo" />
    </Container>
  )
}

export default IconButton
