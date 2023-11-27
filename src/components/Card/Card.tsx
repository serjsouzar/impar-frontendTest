import React from 'react'
import { Container } from './styles'
import { pokeProps } from '../../types/types'

const Card = ({name, sprite}:pokeProps) => {
  return (
    <Container>
      <h1>{name}</h1>
      <img src={sprite?.front_default} width={50} height={50} alt={name}/>       
    </Container>
  )
}

export default Card