import React from 'react'

const Container = ({className,children}) => {
  return (
    <div className={`container mx-auto  ${children,className}`}>
      {children}
    </div>
  )
}

export default Container
