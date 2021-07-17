import { TopBar, MainBody, PaperSimulation } from "../../components";
import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { setLanguage } from "../../redux/modules/language";

const ViewBook = () => {

    const { languages, idbook } = useParams();

    const [lang, setLang] = useState(languages);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setLanguage(lang));
    },[lang]);

    return (
        <MainBody>
            <TopBar onChange={(e) => setLang(e.target.value)} />
            <PaperSimulation languages={languages} bookId={idbook}/>
        </MainBody>
    );

}

export default ViewBook;