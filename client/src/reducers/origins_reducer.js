export default function originsReducer(state = {
  origins: []
}, action) {
  switch (action.type) {
    case "ADD_ORIGIN":
      return state;

    case "@@RESET":
      return { origins: [] }

    default:
      return state;
  }
}