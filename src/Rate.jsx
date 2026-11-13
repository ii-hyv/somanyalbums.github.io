import { useNavigate } from 'react-router-dom';
import Button from './Button';

export default function Rate() {
    const navigate = useNavigate();

    return (
        <div className="screen-container">
            <h2>Rate Album</h2>
            <p><strong>Unknown Album</strong></p>
            <p>by Unknown Artist</p>

            <form onSubmit={(e) => e.preventDefault()} style={{ margin: '25px 0' }}>
                <label htmlFor="rating-select" style={{ marginRight: '10px' }}>
                    Your Rating (1–10):
                </label>
                <select
                    id="rating-select"
                    defaultValue={5}
                    style={{ padding: '8px', fontSize: '16px', marginRight: '10px' }}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>{num}</option>
                    ))}
                </select>

                <Button text="Save Rating" type="submit" />
            </form>

            <div style={{ marginTop: '30px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <Button text="Back to Results" onClick={() => navigate(-1)} />
                <Button text="New Search" onClick={() => navigate("/")} />
            </div>
        </div>
    );
}