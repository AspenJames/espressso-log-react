export default function usersReducer(state = {
    user: ''
}, action) {
    switch (action.type) {
        case "ADD_USER":
        debugger;
            return {user: {
              id: action.user.id,
              name: action.user.name,
              email: action.user.email
            }};

        default:
            return state;
    }
}
