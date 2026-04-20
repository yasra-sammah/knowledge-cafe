import "./firstBook.css"
const FirstBook = ({firstBook}) => {
    const {title} = firstBook
    return (
        <div>
            <h2 className="firstbook">{title}</h2>
        </div>
    );
};

export default FirstBook;