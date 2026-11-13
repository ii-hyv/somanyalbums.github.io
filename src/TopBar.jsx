import { useNavigate } from 'react-router-dom';
import Button from './Button';

export default function TopBar() {
    const navigate = useNavigate();

    return (
        <nav style={{
            display: 'flex',
            gap: '15px',
            padding: '15px',
            justifyContent: 'center',
            borderBottom: '1px solid #333'
        }}>
            <Button text="Home" onClick={() => navigate("/")} />
            <Button text="My Ratings" onClick={() => navigate("/my-ratings")} />
        </nav>
    );
}