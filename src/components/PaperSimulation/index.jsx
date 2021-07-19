import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import api from "../../config/configApi";
import { setBook } from "../../redux/modules/book";

export const BookDiv = styled.div`
    height:  80vh;
    overflow-y: auto;
    
`;


export const BookBody = styled.div`
    padding: 0.8rem;
    line-height: 1.6rem;
`;
export const BookTitle = styled.h3`    
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 2em;
    font-weight: bolder;

`;

export const BookParagraph = styled.p`
    margin-bottom: 0.8rem;  
`;

const PaperSimulation = ({ bookId }) => {
    
    const { language } = useSelector((state) => state.language);

    const [chapters, setChapters] = useState({});
    const dispatch = useDispatch();

    const suggetionBook = async () => {
    
        await api.get('/api/'+language+'/bookslist/'+bookId).then((res) => {
            const [ data ] = res.data;
            setChapters(data.chapters);
            dispatch(setBook(data)) 
            
        }).catch((err) => {
            console.log(err.res);
        });
        
        
    };

    const returnBreakLine = (text, limit=0) => {

        const endText = limit? text.substring(0,limit)+ "...": text;
   
        const endTxt = endText.split('</NBO>');
        
        return(
            
            endTxt.map((braekLine) => {
                return (
                    <BookParagraph>{braekLine}</BookParagraph>
                )
            })
            
        );
    }

    const showChapter = () => {
        if(chapters[0]){
            return (
                chapters.map((item) => {
                    return (
                        <BookBody key={"Na"+item.chapter.toString()}>

                            <BookTitle>{item.chapter === 0? 'Prologo': 'Chapther ' + item.chapter}</BookTitle>
                            <p> { returnBreakLine(item.content) } </p>
                        </BookBody>
                    )
                   
                })
            )
        }else{
     
            return (<h2>i'm here 2</h2>)
        }
    }

    useEffect(()=>{
        suggetionBook();
    },[bookId]);
    useEffect(()=>{
        suggetionBook();
    },[language]);


    return (   
      <BookDiv>
          {showChapter()}
      </BookDiv>
    );

}

export default PaperSimulation;