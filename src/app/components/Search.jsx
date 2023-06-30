import React, { useState, useEffect, useRef } from "react";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [artists, setArtists] = useState([]);
    const inputref = useRef();

    useEffect(() => {
        const fetchArtists = async () => {
            try {
                console.log("Fetching artists...");
                const response = await fetch(
                    `https://api.spotify.com/v1/search?q=${searchTerm}&type=artist`
                );
                const data = await response.json();
                console.log("Artists data:", data);
                setArtists(data.artists.items);
            } catch (error) {
                console.error(error);
            }
        };

        fetchArtists();
    }, [searchTerm]);

    const handleSearch = () => {
        if (inputref.current.value) {
            console.log("Search term:", inputref.current.value);
            window.location.href = `/page/recherche?terms=${inputref.current.value}`;
        } else {
            console.log("Empty search term!");
            alert("Veuillez rentrer une recherche");
        }
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