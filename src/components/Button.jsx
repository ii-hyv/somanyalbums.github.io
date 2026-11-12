export default function Button({ text, onClick, type = "button" }) {
    return (
        <button className="simple-button" onClick={onClick} type={type}>
            {text}
        </button>
    );
}