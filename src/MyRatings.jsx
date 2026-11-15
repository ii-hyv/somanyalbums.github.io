import { useState, useEffect } from 'react';

export default function MyRatings() {
    const [ratings, setRatings] = useState({});

    // Fetch ratings from localStorage when the component mounts
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("albumRatings") || "{}");
        setRatings(savedData);
    }, []);

    const ratedAlbums = Object.entries(ratings);

    return (
        <div className="screen-container">
            <h2>My Ratings</h2>

            {ratedAlbums.length === 0 ? (
                <p>No ratings yet.</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {ratedAlbums.map(([albumKey, rating]) => {
                        const lastDashIndex = albumKey.lastIndexOf('-');
                        const album = lastDashIndex !== -1 ? albumKey.substring(0, lastDashIndex) : albumKey;
                        const artist = lastDashIndex !== -1 ? albumKey.substring(lastDashIndex + 1) : "Unknown Artist";

                        return (
                            <li
                                key={albumKey}
                                style={{
                                    borderBottom: '1px solid #333',
                                    padding: '15px 0',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <div style={{ textAlign: 'left' }}>
                                    <strong>{album}</strong><br />
                                    <small>by {artist}</small>
                                </div>
                                <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                                    {rating} / 10
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}