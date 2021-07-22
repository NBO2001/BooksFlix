import {  Button, TopBar, ButtomMenu,
   Background, Logo, ConteinerMenu, BookParagraph, AuthorMsg } from "../../components";
import {  useDispatch ,useSelector } from "react-redux";
import { setLanguage } from "../../redux/modules/language";
import { useState } from "react";
import { useEffect } from "react";

const Root = () => {
  const {language}  = useSelector((state) => state.language);
  const [lang, setLang] = useState(language);

  //Lang COmponents

  const [lnConp, setLnConp] = useState({});
  const dispatch = useDispatch();

  const changeComponents = (ln) => {
    const pt = {
      Home: 'Inicio',
      Category: 'Categoria',
      Lang: 'Idioma: PT',
      Paramet: 'pt',
      ParagraphOne: "O projeto vBooks surgiu para completar um desafio do bootcamp da Digital Innovation One, a ideia era propocionar uma plataforma com diversos livros, com os mais variados idiomas.",
      ParagraphTwo: "Você pode alterar o idioma apertando no botão IDIOMA.",
      ParagraphThree: "Espero que goste do meu projeto.",
      ParagraphFour: "Natanael Bezerra de Oliveira, Julho de 2021.",
    }
    const en = {
      Home: 'Home',
      Category: 'Category',
      Lang: 'Lang: EN',
      Paramet: 'en',
      ParagraphOne: "The vBooks project arose to complete a challenge of the Digital One Innovation bootcamp, the idea was to provide a platform with several books, with the most varied languages.",
      ParagraphTwo: "You can change the language by pressing the LANG button.",
      ParagraphThree: "I hope you like my project.",
      ParagraphFour: "Natanael Bezerra de Oliveira, July 2021.",
    }
    
    switch(ln){
      case 'pt':
        setLnConp(en);
        break;
      case 'en':
        setLnConp(pt);
        break;
      default:
        break;
    }

  }
  
  useEffect(()=>{
    dispatch(setLanguage(lang));

    changeComponents(lang);

  },[lang]);

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

    return(
      <Background>
          <TopBar>
              <Logo >vBOOKS</Logo>
              <ButtomMenu/>
              <ConteinerMenu id={'showMenu'}>
                <Button width={'95vw'} onClick={redirect}>{lnConp.Home}</Button>
                <Button width={'95vw'}> {lnConp.Category}</Button>
          
               <Button width={'95vw'} id={"chanLang"} onClick={changeLang}>{lnConp.Lang}</Button>

              </ConteinerMenu>
          </TopBar>

          <AuthorMsg>

            <BookParagraph color='#fff' font='1.5em'>{lnConp.ParagraphOne}</BookParagraph>

            <BookParagraph color='#fff' font='1.5em'>{lnConp.ParagraphTwo}</BookParagraph>

            <BookParagraph color='#fff' font='1.5em'>{lnConp.ParagraphThree}</BookParagraph>
            
            <BookParagraph color='#fff' font='1.1em'>{lnConp.ParagraphFour}</BookParagraph>

          </AuthorMsg>
      </Background>
    );

}
export default Root;


/**
 * Tons the blue
 * #0583F2
 * #0597F2
 * #05AFF2
 * 
 * Tons the black
 * #262626
 * #0D0D0D
 */