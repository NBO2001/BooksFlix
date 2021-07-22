import {  Button, TopBar, ButtomMenu,
   Background, Logo, ConteinerMenu } from "../../components";
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
    }
    const en = {
      Home: 'Home',
      Category: 'Category',
      Lang: 'Lang: EN',
      Paramet: 'en',
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
                <Button onClick={redirect}>{lnConp.Home}</Button>
                <Button>{lnConp.Category}</Button>
          
               <Button id={"chanLang"} onClick={changeLang}>{lnConp.Lang}</Button>
              

              </ConteinerMenu>
          </TopBar>
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