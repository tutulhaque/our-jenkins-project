import { use, useState } from "react";
import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import Bookmarks from "./component/Bookmarks/Bookmarks";
import Header from "./component/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [read, setRead] = useState(0);

  const handleRead = (time, id) => {
    const totalReadingTime = read + parseFloat(time);
    setRead(totalReadingTime);
    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmarks);
  };
  const handleBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  return (
    <>
      <main>
        <Header></Header>
        <div className="md:flex p-4 mx-4">
          <Blogs
            handleBookmark={handleBookmark}
            handleRead={handleRead}
          ></Blogs>
          <Bookmarks bookmarks={bookmarks} read={read}></Bookmarks>
        </div>
      </main>
    </>
  );
}

export default App;
