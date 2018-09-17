export default function usersReducer(state = {
    user: ''
}, action) {
    switch (action.type) {
        case "ADD_USER":
            return {user: {
              name: action.user.name,
              email: action.user.email
            }};

        default:
            return state;
    }
}
