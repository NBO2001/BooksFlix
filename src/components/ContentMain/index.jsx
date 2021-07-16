import SectionSuggetion from "../ImageSuggestion";

const ContentHome = ({urlImg, children}) => {
    
    return (
       <SectionSuggetion photo={urlImg}>   
            {children}
       </SectionSuggetion>
       
    );
};

export default ContentHome;
