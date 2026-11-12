import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Button from './Button';

export default function Results() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") || "";
    const navigate = useNavigate();

    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!query) {
            setLoading(false);
            return;
        }

        async function fetchAlbums() {
            try {
                setLoading(true);
                setError(null);

                const API_KEY = import.meta.env.VITE_API_KEY;
                const url = `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${encodeURIComponent(query)}&api_key=${API_KEY}&format=json&limit=10`;

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Could not connect to Last.fm");
                }

                const data = await response.json();
                if (data.error) {
                    throw new Error(data.message);
                }

                const foundAlbums = data?.results?.albummatches?.album || [];
                setAlbums(Array.isArray(foundAlbums) ? foundAlbums : [foundAlbums]);
            } catch (err) {
                setError(`Error: ${err.message}`);
            } finally {
                setLoading(false);
            }
        }

        fetchAlbums();
    }, [query]);

    return (
        <div className="screen-container">
            <h2>Results for "{query}"</h2>

            {loading && <p>Loading albums</p>}
            {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}
            {!loading && !error && albums.length === 0 && <p>No albums found.</p>}

            {!loading && !error && albums.length > 0 && (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {albums.map((album, index) => (
                        <li
                            key={index}
                            style={{
                                borderBottom: '1px solid #eee',
                                padding: '10px 0',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <div style={{ textAlign: 'left' }}>
                                <strong>{album?.name || "Unknown Album"}</strong> <br />
                                <small>{album?.artist || "Unknown Artist"}</small>
                            </div>
                            <Button
                                text="Rate"
                                onClick={() => navigate(`/rate?album=${encodeURIComponent(album?.name)}&artist=${encodeURIComponent(album?.artist)}`)}
                            />
                        </li>
                    ))}
                </ul>
            )}

            <div style={{ marginTop: '20px' }}>
                <Button text="Back to Search" onClick={() => navigate("/")} />
            </div>
        </div>
    );
}