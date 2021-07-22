import { TopBar, MainBody, PaperSimulation,
    Logo, ButtomMenu, ConteinerMenu, Button} from "../../components";
import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { setLanguage } from "../../redux/modules/language";

const ViewBook = () => {

    const { languages, idbook } = useParams();

    const [lang, setLang] = useState(languages);

    const [lnConp, setLnConp] = useState({});

    const dispatch = useDispatch();

    const changeComponents = (ln) => {
        const pt = {
          Home: 'Inicio',
          Category: 'Categoria',
          Lang: 'Idioma: PT',
          Prologue: "Prólogo",
          Paramet: 'pt',
        }
        const en = {
          Home: 'Home',
          Category: 'Category',
          Lang: 'Lang: EN',
          Prologue: "Prologue",
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
      


    const redirect = () => {
        window.location.href = `/home/${lnConp.Paramet}`;
    };


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
        dispatch(setLanguage(lang));
    
        changeComponents(lang);
    
      },[lang]);

    return (
        <MainBody>
               <TopBar>
              <Logo >vBOOKS</Logo>
              <ButtomMenu/>
              <ConteinerMenu id={'showMenu'}>
                <Button width={'95vw'} onClick={redirect}>{lnConp.Home}</Button>
                <Button width={'95vw'}>{lnConp.Category}</Button>
          
               <Button  width={'95vw'}id={"chanLang"} onClick={changeLang}>{lnConp.Lang}</Button>

              </ConteinerMenu>
          </TopBar>

            <PaperSimulation bookId={idbook}/>
        </MainBody>
    );

}

export default ViewBook;