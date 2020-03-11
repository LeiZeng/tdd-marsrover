import React from 'react'
import ReactDOM from 'react-dom'
import Marsrover from '.'
import { render, fireEvent, screen } from '@testing-library/react'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Marsrover X={5} Y={5} x={1} y={2} direction={'N'} cmd={'LMLMLMLMM'} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('should render mars ground', async () => {
  // given
  const wrapper = render(<Marsrover />)

  // when
  const result = await screen.findByRole('marsrover-info')

  // then
  expect(result).toBeTruthy()
})

it('should render control', async () => {
  // given
  const wrapper = render(<Marsrover />)

  // when
  const mapItem = await screen.findByRole('control-container')

  // then
  expect(mapItem).toBeTruthy()
})

it('should update input', async () => {
  // given
  const testInputValue = `5 5
1 2 S
LMLMLMLMM`

  const wrapper = render(<Marsrover />)

  // when
  const commandInput = await screen.findByRole('command-input')

  fireEvent.change(commandInput, {
    target: {value: testInputValue},
  })

  const result = await screen.findByRole('marsrover-info')
  
  // then
  expect(result.textContent).toBe("0 0 N")
})


it.only('should excute parser', async () => {
  // given
  const testInputValue = `5 5
1 2 S
LMLMLMLMM`
  const parser = jest.fn()
    .mockReturnValue({
      X: 5,
      Y: 5,
      x: 1,
      y: 2,
      direction: 'S',
    })

  const wrapper = render(<Marsrover parser={parser} />)

  // when
  const commandInput = await screen.findByRole('command-input')
  const commandButton = await screen.findByRole('command-button')

  fireEvent.change(commandInput, {
    target: {value: testInputValue},
  })
  fireEvent.click(commandButton)
  
  const result = await screen.findByRole('marsrover-info')
  
  // then
  expect(result.textContent).toBe("1 2 S")
})