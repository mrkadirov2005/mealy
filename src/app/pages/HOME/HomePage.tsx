import React, { useEffect } from 'react'
import { fetchMealsData } from '../../reducers/mealsSlice/mealsthunk/mealsThunk'
import { useDispatch } from 'react-redux'
import store from '../../reducers/store'
export default function HomePage() {
    // get all Meals /dispatch/
    const dispatch=useDispatch<AppDispatch>()
    // Define a type for the actions dispatched by your Redux store
    type AppDispatch = typeof store.dispatch;

    useEffect(() => {
        dispatch(fetchMealsData())
    }, [dispatch])
  return (
    <div>HomePage</div>
  )
}
