import { Container } from "./styles"

type IconPorps = {
  children: React.ReactNode
  Icon?: "github" | "linkedin" | "email" | "spotify"
}

const IconButton = (props: IconPorps) => {
  return (
    <Container >
      {props.children}
    </Container>
  )
}

export default IconButton
