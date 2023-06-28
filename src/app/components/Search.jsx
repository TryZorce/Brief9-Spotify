import React, { useState, useEffect, useRef } from "react";


const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [artists, setArtists] = useState([]);
    const inputref = useRef();


    useEffect(() => {
        const fetchArtists = async () => {
            try {
                const response = await fetch(
                    `https://api.spotify.com/v1/search?q=${searchTerm}&type=artist`
                );
                const data = await response.json();
                setArtists(data.artists.items);
            } catch (error) {
                console.error(error);
            }
        };

        fetchArtists();
    }, [searchTerm]);

    const handleSearch = () => {
        if (inputref.current.value) {
            window.location.href = `/page/recherche?terms=${inputref.current.value}`;
        }
        else alert("Rien trouvée")
    };

    return (
        <div>
            <input
                type="text"
                ref={inputref}
                placeholder="Search artists"
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {artists.map((artist) => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;