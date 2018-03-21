const hello = (state = [], action) => {
  // switch (action.type) {
  //   case 'ADD_TODO':
  //     console.log('Soy la verch jaqjajaja');
  //
  //   default:
  //     return "Hello oho oh oh "
  // }
  if(action.type === "INC"){
    console.log('Hola shirgo');
    return state+1;
  }

  return state;
}

export default hello
