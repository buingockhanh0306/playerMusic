import type { NextPage } from "next";
import HomePage from "../Component/template/HomePage";
import {IListSongProps} from "../Types/listSong";
import {useEffect, useState} from "react";
import NhacCuaTui from 'nhaccuatui-api-full'

const Home: NextPage = () => {
  const [listSong, setListSong] = useState<IListSongProps[]>([])
  const [card, setCard] = useState<IListSongProps>()
  useEffect(()=>
  {
    const getSong = async ()=>
    {
      const songs = await NhacCuaTui.getHome()
      setListSong(songs.song)
      setCard(songs.song[0])
    }
    getSong()
  },[])
  return (
      <HomePage
          listSong={listSong}
          cardData={card}

      />
  )
};

export default Home;
