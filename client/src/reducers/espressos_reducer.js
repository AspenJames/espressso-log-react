export default function espressosReducer(state = {
  espressos: []
}, action) {
  switch (action.type) {
    case "ADD_ESPRESSO":
      return state;

    case "@@RESET":
      return { espressos: [] }
    
    default: 
      return state;
  }
}