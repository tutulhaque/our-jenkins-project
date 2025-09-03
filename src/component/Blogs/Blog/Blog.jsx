import { FaBookmark} from "react-icons/fa";
const Blog = ({blog,handleBookmark,handleRead}) => {
    const {id,title,image,author,author_img,posted_date,reading_time,hashtags} = blog;
    return (
        <div className="py-10">
            <img className="max-h-72" src={image} alt="" />
            <div className="flex justify-between py-4">
                <div className="flex">
                    <img className="w-14 rounded-4xl" src={author_img} alt="" />
                    <div className="px-4">
                        <p>{author}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleBookmark(blog)} className="ml-2"> <FaBookmark /></button>

                </div>
            </div>
            <h1 className="text-4xl">{title}</h1>
            <p>
                {
                    hashtags.map((hashtag,index) => <span key={index}><a href="#"> {hashtag}</a></span>)
                }
            </p>
            <button onClick={()=> handleRead(reading_time,id)} className="btn-link cursor-pointer">Mark As Read</button>

        </div>
    );
};

export default Blog;