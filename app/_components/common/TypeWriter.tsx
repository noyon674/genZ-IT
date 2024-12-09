'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function TypeWriter({items}: {items: string[]}) {
  return (
    <>
        <Typewriter
            words={items}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
    </>
  )
}

export default TypeWriter