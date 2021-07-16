import axios from "axios";

export default axios.create({
    baseURL: 'http://booksapi21.herokuapp.com',
});