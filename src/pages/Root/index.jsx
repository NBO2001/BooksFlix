import {  Button, TopBar } from "../../components";
import {  useDispatch ,useSelector } from "react-redux";
import { setLanguage } from "../../redux/modules/language";
import { useState } from "react";
import { useEffect } from "react";

const Root = () => {
    const {language}  = useSelector((state) => state.language);
    const [lang, setLang] = useState(language);
    

    const dispatch = useDispatch();

    const redirect = () => {
        window.location.href = `/home/${language}`;
    };
    
    useEffect(()=>{
      dispatch(setLanguage(lang));
    },[lang]);

    return(
      <>
        <TopBar onChange={(e) => setLang(e.target.value)}/>
        <Button onClick={redirect}>Return</Button>
      </>
    );

}
export default Root;