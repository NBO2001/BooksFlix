import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../config/configApi";
import { setBook } from "../../redux/modules/book";

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
                    <p>{braekLine}</p>
                )
            })
            
        );
    }

    const showChapter = () => {
        if(chapters[0]){
            return (
                chapters.map((item) => {
                    return (
                        <div key={"Na"+item.chapter.toString()}>

                            <h3>{item.chapter === 0? 'Prologo': 'Chapther ' + item.chapter}</h3>
                            <p> { returnBreakLine(item.content) } </p>
                        </div>
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
      <>
          {showChapter()}
      </>
    );

}

export default PaperSimulation;