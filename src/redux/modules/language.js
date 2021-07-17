const Types = {
    SET_LANGUAGE: 'language/SET_LANGUAGE',
}

const initialState = {
    language:'pt',
};


export default function reducer(state = initialState, action){
    switch(action.type){
        case Types.SET_LANGUAGE:
            return { ...state, language: action.payload};
        default:
            return {
                ...state
            };
    }
};

export function setLanguage(language){
    return {
        type: Types.SET_LANGUAGE,
        payload: language,
    };
}

