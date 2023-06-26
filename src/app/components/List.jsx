import React, { useEffect, useState } from 'react';
import List from './List';
import fetchSpotifyApi from '../../api/api';

const ListPage = () => {
  const [topMusics, setTopMusics] = useState([]);

  useEffect(() => {
    const fetchTopMusics = async () => {
      const response = await fetchSpotifyApi('https://api.spotify.com/v1/browse/featured-playlists');
      if (response) {
        setTopMusics(response);
      }
    };

    fetchTopMusics();
  }, []);

  return (
    <div>
      {topMusics.map((music, index) => (
        <List
          key={index}
          title={music.title}
          artist={music.artist}
          album={music.album}
        />
      ))}
    </div>
  );
};

export default ListPage;
