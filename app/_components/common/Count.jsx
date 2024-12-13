"use client"
import { CountUp } from 'use-count-up'

function Count({number}) {
  return (
    <div>
       <CountUp isCounting end={number} duration={3.2} />
    </div>
  )
}

export default Count