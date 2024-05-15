"use client"
import { fetchMealsData } from '@/reducers/mealsSlice/mealsthunk/mealsThunk'
import React, { useEffect } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import {getAllMeals} from "../../settings/selectors"
import "./styles.css"
import { setMeal } from '@/reducers/mealSlice/mealSlice'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import store, { persistedStore } from '@/reducers/store'
import { PersistGate } from 'redux-persist/integration/react'

interface PROPS{
  setToMain:React.Dispatch<React.SetStateAction<boolean>>
}
export default function HomeProducts({setToMain}:PROPS) {
  const dispatch=useDispatch()
  const {id}=useParams()
  
  useEffect(() => {
    dispatch(fetchMealsData())
  }, [])

  const AllMeals=useSelector(getAllMeals)
  // funtion to set single Item
  const handleSetSingleItem=(e)=>{
const data=AllMeals.filter(item=>item.id==Number(e.target.id))
dispatch(setMeal(data))
setToMain(true)

  }
  console.log(AllMeals)



  return (

    <div>
      <ul style={{display:"flex", flexWrap:"wrap"}}>

      {AllMeals.map(item=>
      <li id={item.id} onClick={(e)=>handleSetSingleItem(e)} className='meal_items'>
        <h1>
      {item.name}

        </h1>
      <img src={item.image} alt={`image of ${item.name}`} />
      <h1>{item.price}</h1>
      <h4>{item.producer}</h4>
      <button>view</button>
      </li>
      )}
      </ul>
    </div>
  )
}
