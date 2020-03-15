import React from 'react'
import MarsRover from './components/Marsrover'
import MarsRoverClass from './dojo/marsRover'

const command = `5 5
1 2 N
LMLMLMLMM`

const parser = input => {
  const marsRover = new MarsRoverClass()
  marsRover.execute(input)
  return marsRover
}

export default function App() {
  return (
    <>
      <h1 data-testid="title">练功房前端脚手架</h1>
      <MarsRover command={command} parser={parser} />
    </>
  )
}
