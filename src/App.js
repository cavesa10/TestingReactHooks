import React, {Fragment} from 'react';

import {useInitialState} from './hooks/useInitialState';
import {Header} from './components/Header';
import {Search} from './components/Search';
import {Categorias} from './components/Categorias';
import {Carousel} from './components/Carousel';
import {CarouselItem} from './components/CarouselItem';
import {Footer} from './components/Footer';
import './assets/styless/App.scss'

const API = 'http://localhost:3004/initialState'

function App() {

  const initialState = useInitialState(API)

  return (
    <Fragment>
      <Header/>
      <Search/>
      {initialState.mylist.length > 0 ?
      <Categorias title="Mi lista" >
      <Carousel>
          {
            initialState.mylist.map(item => (
              <CarouselItem key={item.id} {...item} />
            ))
          }
        </Carousel>
      </Categorias>
      : null
      }

      <Categorias title="Tendencias" >
        <Carousel>
          {
            initialState.trends.map(item => (
              <CarouselItem key={item.id} {...item} />
            ))
          }
        </Carousel>
      </Categorias>

      <Categorias title="Top 10 - Colombia" >
      <Carousel>
          {
            initialState.originals.map(item => (
              <CarouselItem key={item.id} {...item} />
            ))
          }
        </Carousel>
      </Categorias>

      <Footer/>
    </Fragment>
  );
}

export default App;
