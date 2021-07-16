import react from "react";
import styled from "styled-components";

import SectionSuggetion from "../ImageSuggestion";
import TitleBook from "../Title";
import FieldSynopse from "../FieldSynopse";
import Button from "../Button";

const ContentHome = ({urlImg, bookTitle, bookSynopse}) => {
    
    return (
       <SectionSuggetion photo={urlImg}>
            <TitleBook bookTitle={bookTitle}/>
            <FieldSynopse text={bookSynopse}/>
          
            <div>         
                <Button><i class="fab fa-leanpub"></i>Read</Button>
                <Button><i class="fas fa-info-circle"></i>Info</Button>
            </div>
       </SectionSuggetion>
       
    );
};

export default ContentHome;
