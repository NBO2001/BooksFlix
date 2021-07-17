const Types = {
    SET_BOOK: 'book/SET_BOOK',
    SET_BOOKID: 'book/SET_BOOKID'
}

const initialState = {
    book:[],
    bookId: null
};


export default function reducer(state = initialState, action){

    switch(action.type){
        case Types.SET_BOOK:
            return { ...state, book: action.payload};
        case Types.SET_BOOKID:
            return { ...state, bookId: action.payload}
        default:
            return {
                ...state
            };
    }
};

export function setBook(book){
    return {
        type: Types.SET_BOOK,
        payload: book,
    };
}

export function setBookId(bookId){
    return{
        type: Types.SET_BOOKID,
        payload: bookId,
    }
}
