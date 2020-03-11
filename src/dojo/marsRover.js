const command = {
  X: 0,
  Y: 0,
  x: 0,
  y: 0,
  direction: 'N',
  commandList: '',
}
class MarsRover {
  X = 5;
  Y = 5;
  x = 0;
  y = 0;
  direction = 'S';
  command = null;

  execute(commandText) {
    this.initCommand(commandText)
    this.initMarsRover()
    this.moveByCommands()
    return this.formatOutput()
  }
  initCommand(commandText) {
    const commandLine = commandText.split('\n')
    const commandMapSize = commandLine[0].split(' ')
    const commandPositionAndDirection = commandLine[1].split(' ')

    this.command = {
      X: Number(commandMapSize[0]),
      Y: Number(commandMapSize[1]),
      x: Number(commandPositionAndDirection[0]),
      y: Number(commandPositionAndDirection[1]),
      direction: commandPositionAndDirection[2],
      commandList: commandLine[2],
    }
  }
  initMarsRover() {
    this.x = this.command.x
    this.y = this.command.y
    this.direction = this.command.direction
  }
  moveByCommands() {
    this.command.commandList.split('')
      .forEach(command => this.moveByCommand(command))
  }
  moveByCommand(command) {
    // TODO to complete cases
    if (command === 'M') {
      if (this.direction === 'S') {
        this.y += 1
      } else if (this.direction === 'W') {
        this.x -= 1
      } else if (this.direction === 'E') {
        this.x += 1
      }
    } else if(command === 'L') {
      if (this.direction === 'S') {
        this.direction = 'E'
      } else if (this.direction === 'N') {
        this.direction = 'W'
      } else if (this.direction === 'W') {
        this.direction = 'S'
      } else if (this.direction === 'E') {
        this.direction = 'N'
      }
    }
  }
  formatOutput() {
    return `${this.x} ${this.y} ${this.direction}`
  }
}

export default MarsRover