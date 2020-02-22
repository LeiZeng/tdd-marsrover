import MarsRover from './marsRover'

const commandText = `5 5\n1 2 N\nLMLMLMLMM`

describe('Test MarsRover', () => {
  it('should return `1 3 N` given default commands', () => {
    const marsRover = new MarsRover()
    expect(marsRover.execute(commandText)).toBe('1 3 N')
  })
  it('should be able to init command', () => {
    const marsRover = new MarsRover()
    marsRover.initCommand(commandText)

    expect(marsRover.command.X).toBe(5)
    expect(marsRover.command.Y).toBe(5)
    expect(marsRover.command.x).toBe(1)
    expect(marsRover.command.y).toBe(2)
    expect(marsRover.command.direction).toBe('N')
    expect(marsRover.command.commandList).toBe('LMLMLMLMM')
  })
  it('should init position and direction of MarsRover', () => {
    const marsRover = new MarsRover()
    
    expect(marsRover.x).toBe(0)
    expect(marsRover.y).toBe(0)
    expect(marsRover.direction).toBe('S')

    marsRover.initCommand(commandText)
    marsRover.initMarsRover()
    expect(marsRover.x).toBe(1)
    expect(marsRover.y).toBe(2)
    expect(marsRover.direction).toBe('N')
  })
  it('should be able to move once by a command M while direction is S', () => {
    const marsRover = new MarsRover()

    marsRover.moveByCommand('M')
    marsRover.moveByCommand('L')
    expect(marsRover.y).toBe(1)
    expect(marsRover.direction).toBe('E')
  })
  it('should be able to move once by a command M while direction is S', () => {
    const marsRover = new MarsRover()

    marsRover.initCommand(commandText)
    marsRover.initMarsRover()

    marsRover.moveByCommand('L')
    expect(marsRover.direction).toBe('W')

    marsRover.moveByCommand('M')
    expect(marsRover.x).toBe(0)

    marsRover.moveByCommand('L')
    expect(marsRover.direction).toBe('S')

    marsRover.moveByCommand('M')
    expect(marsRover.y).toBe(3)

    marsRover.moveByCommand('L')
    expect(marsRover.direction).toBe('E')

    marsRover.moveByCommand('M')
    expect(marsRover.x).toBe(1)

    marsRover.moveByCommand('L')
    expect(marsRover.direction).toBe('N')
  })
  it('should be able to move by multiple commands', () => {
    const marsRover = new MarsRover()

    marsRover.initCommand(commandText)
    marsRover.initMarsRover()
    marsRover.moveByCommands()

    expect(marsRover.x).toBe(1)
    expect(marsRover.y).toBe(3)
    expect(marsRover.direction).toBe('N')
  })
  it('should be able to format output string', () => {
    const marsRover = new MarsRover()

    expect(marsRover.formatOutput()).toBe('0 0 S')
  })
})
