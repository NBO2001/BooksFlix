import React, { useEffect, useState } from 'react';
import api from "../../config/configApi";

import { TopBar, ContentHome, MainPage, ConteinerCarousel, SimpleSlider } from "../../components/index";


const Home = () => {

    const [book, setBook] = useState({
        synopsis: ""
    }); 

    const suggetionBook = async () => {
        
        await api.get('/api/en/suggestion').then((res) => {
            const [ data ] = res.data;
            setBook(data);
            
        }).catch((err) => {
            console.log(err.res);
        });
        
        
    };

    useEffect(()=>{
        suggetionBook();
    }, []);
    
    return (
        <MainPage>
            <TopBar />
            <ContentHome urlImg={book.imgUrl} bookTitle={book.title} bookSynopse={book.synopsis.length > 400? book.synopsis.substring(0,400) + "...":book.synopsis}/>
            <ConteinerCarousel><SimpleSlider /></ConteinerCarousel>
        </MainPage>
    );
};

export default Home;