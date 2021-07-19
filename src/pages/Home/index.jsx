import React, { useEffect, useState } from 'react';
import api from "../../config/configApi";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { TopBar, ContentHome, MainPage, ConteinerCarousel, 
    SimpleSlider, BookCard, Modal, Button, FieldSynopse,
    TitleBook, SectionSynpse, BookParagraph } from "../../components/index";


const Home = () => {
    const { languages } = useParams();
    const [lang, setLang] = useState(languages);

    const {language}  = useSelector((state) => state.language);
    console.log(language);

    //Status Modal Open/Close
    const [modalOpened, setModalOpened] = useState(false);

    const [book, setBook] = useState({
        synopsis: ""
    });
    const [booksImgs, setBooksImgs] = useState([]);
    
    const [modalContent, setModalContent] = useState("");

    const suggetionBook = async () => {
        
        await api.get('/api/'+lang+'/suggestion').then((res) => {
            const [ data ] = res.data;
            setBook(data);
            
        }).catch((err) => {
            console.log(err.res);
        });
        
        
    };
    const booksCardsImgs = async () => {
        
        await api.get('/api/'+lang+'/bookslist').then((res) =>{
           
            setBooksImgs(res.data);

        }).catch((err) => {
            console.log(err.res);
        });
    }
    const nowBook = async (id) => {
        await api.get('/api/'+lang+'/bookslist/'+id).then((res) => {
            const [ bookte ] = res.data;
            setBook(bookte);

        }).catch((err) => {
            console.log(err.res);
        });
    }

    useEffect(()=>{
        suggetionBook();
    }, [lang]);

    useEffect(()=>{
        booksCardsImgs();
    }, [lang]);

    const bookRead = () => {
        window.location.href = `/read/${lang}/${book.id}`;
    }
    const bookInformation = (id) => {
        setModalContent('');
        const contentModel = () => {
            return (
                <>
                <TitleBook color="#0D0D0D" bookTitle={book.title}/> 
                <SectionSynpse>

                     {returnSynopse(book.synopsis)}
                </SectionSynpse>
                </>
            );
        }
        setModalContent(contentModel);
        setModalOpened(true);
    }
    const returnSynopse = (text, limit=0) => {
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
    return (
        <>
            <MainPage>
                <TopBar onChange={(e) => setLang(e.target.value) } />
        
                <ContentHome urlImg={book.imgUrl} >

                    <TitleBook bookTitle={book.title}/>  

                    <FieldSynopse text={returnSynopse(book.synopsis, 400)}/>
                    
                    <div>         
                        <Button onClick={() => bookRead()}><i className="fab fa-leanpub"></i>Read</Button>
                        <Button onClick={() => bookInformation(book.id)}><i className="fas fa-info-circle"></i>Info</Button>
                    </div>
                </ContentHome>
                
                <ConteinerCarousel>
                        <SimpleSlider >
                            {booksImgs.map((item) => (
                                <BookCard onClick={() => nowBook(item.id)} key={item.id} photo={item.imgUrl}/>
                            ))}
                        </SimpleSlider>
                </ConteinerCarousel>
            </MainPage>

            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
               {modalContent}
            </Modal>
        </>
    );
};

export default Home;