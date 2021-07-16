import React from 'react';

import { TopBar, ContentHome, MainPage, ConteinerCarousel, SimpleSlider } from "../../components/index";


const Home = () => {
    const urlImg = "https://images-na.ssl-images-amazon.com/images/P/B015FELXQ0.01._SCLZZZZZZZ_SX500_.jpg";
    const bookTitle = "A Court of Thorns and Roses";        
    const bookSynopse = "Feyre's survival rests upon her ability to hunt and kill – the forest where she lives is a cold, bleak place in the long winter months. So when she spots a deer in the forest being pursued by a wolf, she cannot resist fighting it for the flesh. But to do so, she must kill the predator and killing something so precious comes at a price ... "
    
    return (
        <MainPage>
            <TopBar />
            <ContentHome urlImg={urlImg} bookTitle={bookTitle} bookSynopse={bookSynopse}/>
            <ConteinerCarousel><SimpleSlider /></ConteinerCarousel>
        </MainPage>
    );
};

export default Home;