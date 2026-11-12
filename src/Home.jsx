import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

function Home() {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    function handleSearch(event) {
        event.preventDefault();

        if (searchText.trim() !== "") {

            navigate(`/results?query=${searchText}`);
        }
    }

    return (
        <div className="screen-container">
            <h1>Album Rater</h1>
            <p>Find an album and give it a rating from 1 to 10.</p>

            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                    placeholder="Type an album name..."
                    className="search-input"
                />
                <Button text="Search" type="submit" />
            </form>
        </div>
    );
}
export default Home;