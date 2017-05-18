


export function select(idx) {
  return {
    type: 'move',
    cell: idx
  };
}

export function restart(){
  return{
    type: 'restart'
  };
}
