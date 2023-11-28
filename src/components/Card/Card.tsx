import React from 'react'
import { Container } from './styles'
import { pokeProps } from '../../types/types'

const Card = ({name, sprites}:pokeProps) => {

const capitalName = name.charAt(0).toUpperCase() + name.slice(1)

  return (
    <Container>
      <h1>{capitalName}</h1>
      <img src={sprites?.other?.dream_world?.front_default} width={80} height={80} alt={name}/>                
    </Container>
  )
}

export default Card