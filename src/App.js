import React, {Fragment, useEffect, useState} from 'react';

import {Header} from './components/Header';
import {Search} from './components/Search';
import {Categorias} from './components/Categorias';
import {Carousel} from './components/Carousel';
import {CarouselItem} from './components/CarouselItem';
import {Footer} from './components/Footer';
import './assets/styless/App.scss'

function App() {

  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] })

  useEffect( () => {
    const llamadoAPI = async () => {
      const respuesta = await fetch('http://localhost:3000/initalState')
      const data = await respuesta.json()
      setVideos(data)
    }
    llamadoAPI()
  }, [])
  return (
    <Fragment>
      <Header/>
      <Search/>
      {videos.mylist === 0 ?
      <Categorias title="Mi lista" >
        <Carousel>
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
        </Carousel>
      </Categorias>
      : null
      }

      <Categorias title="Tendencias" >
        <Carousel>
          {
            videos.trends.map(item => (
              <CarouselItem key={item.id} {...item} />
            ))
          }
        </Carousel>
      </Categorias>

      <Categorias title="Top 10 - Colombia" >
        <Carousel>
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
