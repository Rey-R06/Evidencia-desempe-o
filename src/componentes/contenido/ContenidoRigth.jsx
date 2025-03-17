import React from 'react'
import Card from './Card'

export default function ContenidoRigth() {
  return (
    <aside className='contenido-rigth'>
        <Card className="card" backgroundImage="/simon.jpeg"/>
        <Card className="card" backgroundImage="/sergio.jpeg"/>
        <div className='contenedor-card2'>
            <Card className="card2"  backgroundImage="/richi.jpeg"/>
            <Card className="card2" backgroundImage="/yo.jpeg"/>
        </div>
    </aside>
  )
}
