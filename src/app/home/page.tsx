import { fetchMealsData } from '@/reducers/mealsSlice/mealsthunk/mealsThunk'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllMeals} from "../../settings/selectors"

export default function HomeProducts() {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(fetchMealsData())
    
  }, [])
  const AllMeals=useSelector(getAllMeals)
  return (
    <div>
      
    </div>
  )
}
