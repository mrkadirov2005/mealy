import Link from 'next/link'
import React from 'react'

const Routing = () => {
  return (
    <div>
        <Link href="/home">Home</Link>
        <Link href="/clothes">Clothes</Link>
        <Link href="/meals">Meals</Link>
        <Link href="/filters">Filters</Link>
       </div>
  )
}

export default Routing