import React from 'react'

function Button({children, style}:{children: React.ReactNode, style:string}) {
  return <>
    <button className={style}>{children}</button>
  </>
}

export default Button