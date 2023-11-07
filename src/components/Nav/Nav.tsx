import React from 'react'
import { BackgroundImg, Container } from './styles'

const Nav = () => {
  return (
    <Container>
      <BackgroundImg src={require("./../../assets/fundo_busca.png")} alt="background_image"/>
    </Container>
  )
}

export default Nav