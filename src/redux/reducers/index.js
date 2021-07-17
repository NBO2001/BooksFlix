import { combineReducers  } from "redux";

import language from "../modules/language";
import book from "../modules/book";


export default combineReducers({
    language,
    book
});