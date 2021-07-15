import react from "react";
import styled from "styled-components";

import SectionSuggetion from "../ImageSuggestion";
import TitleBook from "../Title";
import FieldSynopse from "../FieldSynopse";

const ContentHome = ({urlImg, bookTitle, bookSynopse}) => {
    
    return (
       <SectionSuggetion photo={urlImg}>
            <TitleBook bookTitle={bookTitle}/>
            <FieldSynopse text={bookSynopse}/>
          
            <div>
                <button>Read</button>
                <button>Leard</button>
            </div>
       </SectionSuggetion>
    );
};

export default ContentHome;
