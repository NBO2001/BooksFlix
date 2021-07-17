import { TopBar, MainBody, PaperSimulation } from "../../components";
import React from "react";
import { useParams } from "react-router-dom";
const ViewBook = () => {

    const { idbook } = useParams();
    
    return (
        <MainBody>
            <TopBar />
            <PaperSimulation bookId={idbook}/>
        </MainBody>
    );

}

export default ViewBook;