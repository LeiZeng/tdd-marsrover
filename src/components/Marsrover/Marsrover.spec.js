import React from 'react'
import ReactDOM from 'react-dom'
import Marsrover from '.'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Marsrover X={5} Y={5} x={1} y={2} direction={'N'} cmd={'LMLMLMLMM'} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
