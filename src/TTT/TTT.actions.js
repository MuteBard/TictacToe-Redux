


export function select(idx) {
  return {
    type: 'move',
    index: idx
  }
}

export function restart(){
  return{
    type: 'move'
  }
}
