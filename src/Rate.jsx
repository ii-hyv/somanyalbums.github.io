import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { useState, useEffect } from 'react';
import { useSearchParams} from 'react-router-dom';

export default function Rate() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const album = searchParams.get("album") || "Unknown Album";
    const artist = searchParams.get("artist") || "Unknown Artist";
    const [rating, setRating] = useState(5);
    const [savedMessage, setSavedMessage] = useState("");


    // unique name to identify this specific album in storage

    const albumKey = `${album} 

${artist}`;

    // check if we already rated this album earlier

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("albumRatings") || "{}");
        if (savedData[albumKey]) {
            setRating(savedData[albumKey]);
        }
    }, [albumKey]);


    function handleSave(event) {
        event.preventDefault();
        //pull existing ratings

        const existingRatings = JSON.parse(localStorage.getItem("albumRatings") || "{}");

        // add/update rating
        existingRatings[albumKey] = Number(rating);

        // save new list to storage
        localStorage.setItem("albumRatings", JSON.stringify(existingRatings));
        setSavedMessage(`Your rating: ${rating}/10.`);

    }
    return (
        <div className="screen-container">
            <h2>Rate Album</h2>
            <p><strong>{album}</strong></p>
            <p>by {artist}</p>

            <form onSubmit={handleSave} className="rating-form">
                <label htmlFor="rating-select" style={{ fontWeight: 'bold' }}>
                    Your Rating (1–10):
                </label>
                <select
                    id="rating-select"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="rating-select"
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>{num}</option>
                    ))}
                </select>

                <Button text="Save Rating" type="submit" />
            </form>

            {savedMessage && (
                <p style={{ color: 'green', fontWeight: 'bold' }}>{savedMessage}</p>
            )}

            <div style={{ marginTop: '30px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <Button text="Back to Results" onClick={() => navigate(-1)} />
                <Button text="New Search" onClick={() => navigate("/")} />
            </div>
        </div>
    );
}