import React, { useEffect } from 'react'
import { fetchMealsData } from '../reducers/mealsSlice/mealsthunk/mealsThunk'
import { useDispatch } from 'react-redux'

export default function HomePage() {
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(fetchMealsData())
    }, [dispatch])
  return (
    <div>HomePage</div>
  )
}
