import React from 'react'
import ContenidoLeft from './ContenidoLeft'
import ContenidoRigth from './ContenidoRigth'

export default function Contenido() {
  return (
    <main className='contenido'>
        <ContenidoLeft />
        <ContenidoRigth />
    </main>
  )
}
