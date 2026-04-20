import FirstBook from "../FirstBook/FirstBook";



const Bookmark = ({bookmarks , readingTime}) => {
    const {title} = bookmarks
    return (
        <div className="w-1/3 mx-6 mt-8  " >
            <div className="bg-purple-200 p-6 rounded-2xl">
                <h2 className="text-3xl font-semibold text-purple-500 ">
                    Spent Time on read:{readingTime}
                </h2>
            </div>
            <div className="my-4 bg-[rgba(17,17,17,0.05)] rounded-2xl ">
            <h2 className="text-4xl p-10 font-semibold">
                Bookmarks Bolg:{bookmarks.length}
                {
                    bookmarks.map((firstBook, idx) => <FirstBook key={idx} firstBook={firstBook}></FirstBook>)
                }
            </h2>
            </div>
        </div>
    );
};

export default Bookmark;