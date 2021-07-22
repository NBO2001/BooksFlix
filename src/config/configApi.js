import axios from "axios";

export default axios.create({
    baseURL: 'https://booksapi21.herokuapp.com',
});