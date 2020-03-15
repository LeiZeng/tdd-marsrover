import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react'

import MarsGround from '.'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MarsGround />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('should have h3 title', () => {
  // given
  const wrapper = render(<MarsGround />)

  // when
  const result = wrapper.getByTestId('playground-title').textContent

  // then
  expect(result).toBe('MarsRover')
})

it('should have map tile', async () => {
  // given
  const wrapper = render(<MarsGround />)

  // when
  const mapItem = await screen.findAllByTestId('map-item')

  // then
  expect(mapItem.length).toBe(25)
})

it('should have init info of marsrover', async () => {
  // given
  const wrapper = render(<MarsGround />)

  // when
  const result = await screen.findByTestId('marsrover-info')

  // then
  expect(result.textContent).toBe('0 0 N')
})
