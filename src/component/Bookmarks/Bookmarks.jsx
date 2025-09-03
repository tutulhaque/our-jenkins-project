import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,read}) => {
    return (
        <div className="md:w-1/3">
            <div>
                <h3 className="text-3xl">{read} - Min Reading Time</h3>
            </div>
            <h1 className="text-4xl">Bookmark: {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark =>(
                    <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
                ))
            }
            
        </div>
    );
};

export default Bookmarks;