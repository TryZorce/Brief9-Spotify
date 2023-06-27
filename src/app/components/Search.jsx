import React, { useState, useEffect } from "react";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [artists, setArtists] = useState([]);

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
        window.location.href = `/page/recherche?${searchTerm}`;
    };

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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