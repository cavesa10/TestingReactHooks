import {useState, useEffect} from 'react';

export const useInitialState = (API)  => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] })
  useEffect( () => {
    const llamadoAPI = async () => {
      const respuesta = await fetch(API)
      const data = await respuesta.json()
      setVideos(data)
    }
    llamadoAPI()
  }, [])
  return videos
}