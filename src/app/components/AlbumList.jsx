import fetchSpotifyApi from "../../api/api";
import List from "../components/List";

const AlbumList = async () => {
  const response = await fetchSpotifyApi('browse/new-releases?limit=5');
  console.log(response);
  return (
    <>
        {response?.albums.items.map((album, index) => (
          <List
            key={index}
            id={album.id}
            title={album.name}
            artist={album.artists[0].name}
            image={album.images[0].url}
          />
        ))}
    </>
  );
};

export default AlbumList;