import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import originsReducer from './origins_reducer';
import espressosReducer from './espressos_reducer';
import coffeeShopsReducer from './coffee_shops_reducer';

const rootReducer = combineReducers({
   users: usersReducer,
   coffee_shops: coffeeShopsReducer,
   origns: originsReducer,
   espressos: espressosReducer
});

export default rootReducer;
