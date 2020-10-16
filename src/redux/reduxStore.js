import dialogsReduser from "./dialogsReduser";
import profileReduser from "./profileReduser";
import usersReduser from "./usersReduser";
import authReduser from "./authReduser";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReduser from "./appReduser";

const { createStore, combineReducers, applyMiddleware } = require("redux");

let redusers= combineReducers({
    profileData: profileReduser,
    dialogsData:dialogsReduser,
    usersData: usersReduser,
    auth: authReduser,
    app: appReduser,
    form: formReducer
});

let store=createStore(redusers,applyMiddleware(thunkMiddleware));

export default store