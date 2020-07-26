import React, {Fragment} from 'react';

import {Header} from './components/Header';
import {Search} from './components/Search';
import {Categorias} from './components/Categorias';
import {Carousel} from './components/Carousel';
import {CarouselItem} from './components/CarouselItem';
import {Footer} from './components/Footer';
import './assets/styless/App.scss'

function App() {
  return (
    <Fragment>
      <Header/>
      <Search/>
      <Categorias>
        <Carousel>
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
        </Carousel>
      </Categorias>
      <Footer/>
    </Fragment>
  );
}

export default App;
