import React from 'react'
import Card from './Card'

export default function ContenidoRigth() {
  return (
    <aside className='contenido-rigth'>
        <Card className="card"/>
        <Card className="card" />
        <div className='contenedor-card2'>
            <Card className="card2"/>
            <Card className="card2"/>
        </div>
    </aside>
  )
}
