import React from 'react'
import _ from 'lodash'
import './MarsGround.css'

const size = 62
const MarsGround = ({ width = 5, height = 5, x = 0, y = 0, direction = 'N' }) => (
  <div className="MarsroverPlayground">
    <h3 data-testid="playground-title">MarsRover</h3>
    <div className="MarsroverCanvas">
      <div className="Gridmap" style={{ width: width * size, height: height * size }}>
        <div className="MarsGround" style={{ width: width * size, height: height * size }}>
          {_.times(width * height, String).map(h => (
            <div data-testid="map-item" key={h} className="MarsGroundItem" />
          ))}
        </div>

        <div className={['Marsrover', direction].join(' ')} style={{ left: x * size + 2, top: y * size - 2 }}>
          <div data-testid="marsrover" className="Rover">️⬆</div>
          <div data-testid="marsrover-info" className="RoverInfo">{`${x} ${y} ${direction}`}</div>
        </div>

        <div className="mark N">N</div>
        <div className="mark S">S</div>
        <div className="mark W">W</div>
        <div className="mark E">E</div>
        <div className="mark E">E</div>
        <div className="mark min">(0, 0)</div>
        <div className="mark max">{`(${width}, ${height})`}</div>
      </div>
    </div>
  </div>
)

export default MarsGround
