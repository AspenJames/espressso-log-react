import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import originsReducer from './origins_reducer';
import espressosReducer from './espressos_reducer';

const rootReducer = combineReducers({
    users: usersReducer,
    origns: originsReducer,
    espressos: espressosReducer
});

export default rootReducer;