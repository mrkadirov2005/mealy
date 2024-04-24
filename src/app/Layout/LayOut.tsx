"use client"
import React from 'react'
import { Provider } from 'react-redux'
import store from "../reducers/store"
import HomePage from '../pages/HomePage'
export default function LayOut() {

  return (

    <Provider store={store}>

    <div>
      <HomePage/>
    </div>
    </Provider>

  )
}
