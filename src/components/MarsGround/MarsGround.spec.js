import React from 'react'
import ReactDOM from 'react-dom'
import MarsGround from '.'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MarsGround />, div)
  ReactDOM.unmountComponentAtNode(div)
})
