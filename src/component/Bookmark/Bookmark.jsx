const Bookmark = ({bookmark}) => {
    return (
        <div className="bg-slate-200 p-4 my-4 rounded-xl">
            <h1>{bookmark.title}</h1>
        </div>
    );
};

export default Bookmark;