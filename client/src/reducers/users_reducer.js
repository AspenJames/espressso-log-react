export default function usersReducer(state = {
    user: ''
}, action) {
    switch (action.type) {
        case "ADD_USER":
            return {user: {
              id: action.user.id,
              name: action.user.name,
              email: action.user.email
            }};

        case "RESET_USER":
          return {user: ''}

        default:
            return state;
    }
}
