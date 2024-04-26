import React from 'react'
import Header from '../header/page'
import { BrowserRouter } from 'react-router-dom'
import { LayOutContainer } from './layout_styles'


export default function LayOut() {
  return (
    <LayOutContainer>
    <Header/>
    </LayOutContainer>

  )
}
