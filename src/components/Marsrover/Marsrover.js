import React, { Component } from 'react'
import { Input, Button } from 'antd'
import 'antd/dist/antd.css'
import './Marsrover.css'
import MarsGround from '../MarsGround'
import { parse } from 'date-fns';

const { TextArea } = Input
const defaultValue = `5 5
1 2 N
LMLMLMLMM`

export default class Marsrover extends Component {
  state = {
    input: defaultValue,
    X: 5,
    Y: 5,
    x: 0,
    y: 0,
    direction: 'N',
  }
  render() {
    const { X, Y, x, y, direction } = this.state
    const { command = defaultValue, parser } = this.props

    return (
      <div>
        <MarsGround width={X} height={Y} x={x} y={y} direction={direction} />
        <div className="Control">
          <TextArea
            defaultValue={command}
            className="ControlInput"
            raws={4}
            onChange={e => {
              this.setState({ input: e.currentTarget.value })
            }}
          />
          <Button className="ControlButton" type="primary" onClick={() => {
            if (parser) {
              const {
                X, Y, x,y, direction
              } = parse(this.state.input) || {}

              this.setState({
                X, Y, x,y, direction
              })
            }
          }}>
            Excute
          </Button>
        </div>
      </div>
    )
  }
}
