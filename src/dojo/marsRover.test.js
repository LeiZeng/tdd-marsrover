import MarsRover from './marsRover'

const commandText = `5 5\n1 2 N\nLMLMLMLMM`

describe('Test MarsRover', () => {
  it('should return `1 3 N` given default commands', () => {
    const marsRover = new MarsRover()
    expect(marsRover.execute(commandText)).toBe('1 3 N')
  })
})
