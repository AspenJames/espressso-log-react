export default function usersReducer(state = {
    user: '',
    coffeeShops: []
}, action) {
    switch (action.type) {
        case "ADD_USER":
            return state;

        default:
            return state;
    }
}