"use client"
import Link from 'next/link'
import React from 'react'
import { LinkStyles, RoutingContainer } from './routing_styles'

const Routing = () => {
  return (
    <RoutingContainer>
        <Link style={LinkStyles} href="/">Home</Link>
        <Link style={LinkStyles} href="/clothes">Clothes</Link>
        <Link style={LinkStyles} href="/meals">Meals</Link>
        <Link style={LinkStyles} href="/filters">Filters</Link>
       </RoutingContainer>
  )
}

export default Routing