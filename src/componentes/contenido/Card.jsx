import React from 'react'

export default function Card({className, backgroundImage}) {
  return (
    <section
      className={className}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
    </section>
  )
}
