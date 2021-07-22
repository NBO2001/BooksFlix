import React, { useEffect, useState } from 'react';
import api from "../../config/configApi";
import { useParams } from "react-router-dom";

import { TopBar, ContentHome, MainPage, ConteinerCarousel, 
    SimpleSlider, BookCard, Modal, Button, FieldSynopse,
    TitleBook, SectionSynpse, BookParagraph, Logo, ButtomMenu, ConteinerMenu } from "../../components/index";


const Home = () => {

    const { languages } = useParams();
    const [lang, setLang] = useState(languages);
    const [lnConp, setLnConp] = useState({});

    //Status Modal Open/Close
    const [modalOpened, setModalOpened] = useState(false);

    const [book, setBook] = useState({
        synopsis: ""
    });
    const [booksImgs, setBooksImgs] = useState([]);
    
    const [modalContent, setModalContent] = useState("");

    const changeComponents = (ln) => {
        const pt = {
          About: 'Sobre',
          Category: 'Categoria',
          Lang: 'Idioma: PT',
          Read: "Ler",
          Paramet: 'pt',
 
        }
        const en = {
            About: 'About',
          Category: 'Category',
          Lang: 'Lang: EN',
          Read: "Read",
          Paramet: 'en',
  
        }
        
        switch(ln){
          case 'pt':
            setLnConp(pt);
            break;
          case 'en':
            setLnConp(en);
            break;
          default:
            break;
        }
    
      }
    const suggetionBook = async () => {
        
        await api.get('/api/'+lang+'/suggestion').then((res) => {
            const [ data ] = res.data;
            setBook(data);
            
        }).catch((err) => {
            
        });
        
        
    };
    const booksCardsImgs = async () => {
        
        await api.get('/api/'+lang+'/bookslist').then((res) =>{
           
            setBooksImgs(res.data);

        }).catch((err) => {
            
        });
    }
    const nowBook = async (id) => {
        await api.get('/api/'+lang+'/bookslist/'+id).then((res) => {
            const [ bookte ] = res.data;
            setBook(bookte);

        }).catch((err) => {
            
        });
    }

    const changeLang = () => {
        
        switch(lang){
 
           case 'pt':
               setLang('en');
               changeComponents('en');
               break;
           case 'en':
                 setLang('pt');
                 changeComponents('pt');
                 break;
           default:
             break;
        }
      }

    useEffect(()=>{
       
        changeComponents(lang);
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
                <TitleBook color="#0583F2" bookTitle={book.title}/> 
                <SectionSynpse>

                     {returnSynopse(book.synopsis)}
                </SectionSynpse>
                </>
            );
        }
        setModalContent(contentModel);
        setModalOpened(true);
    }
    const aboutRed = () => {
        window.location.href = `/`;
    };
    const returnSynopse = (text, limit=0) => {
        const endText = limit? text.substring(0,limit)+ "...": text;
   
        const endTxt = endText.split('</NBO>');
        
        return(
            
            endTxt.map((braekLine) => {
                return (
                    <BookParagraph color="#fff">{braekLine}</BookParagraph>
                )
            })
            
        );
    }
    return (
        <>
            <MainPage>

                <TopBar>
                    <Logo >vBOOKS</Logo>
                    <ButtomMenu/>
                    <ConteinerMenu id={'showMenu'}>

                        <Button width={'95vw'} onClick={aboutRed}>{lnConp.About}</Button>
                        <Button width={'95vw'}>{lnConp.Category}</Button>
                
                    <Button width={'95vw'} id={"chanLang"} onClick={changeLang}>{lnConp.Lang}</Button>

                    </ConteinerMenu>
                 </TopBar>
        
                <ContentHome urlImg={book.imgUrl} >

                    <TitleBook color="#0583F2" bookTitle={book.title}/>  

                    <FieldSynopse text={returnSynopse(book.synopsis, 400)}/>
                    
                    <div>         
                        <Button onClick={() => bookRead()}><i className="fab fa-leanpub"></i>{lnConp.Read}</Button>
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