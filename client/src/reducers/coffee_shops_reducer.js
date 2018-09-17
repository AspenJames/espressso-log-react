export default function coffeeShopsReducer(state = {
  coffeeShops: []
}, action) {
  switch(action.type) {
    case "ADD_COFFEE_SHOP":
      return { coffeeShops: state.coffeeShops.concat(action.coffeeShop) }

    default: 
      return state;
  }
}
