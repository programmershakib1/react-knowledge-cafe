import PropTypes from 'prop-types'
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id, title, cover, author, author_img, reading_time, posted_date, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8 rounded-lg' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h2 className='text-2xl'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button
                        onClick={() =>handleAddToBookmark(blog)}
                        className='ml-2 text-2xl'
                    ><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold mb-3'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button 
                onClick={() => handleMarkAsRead(id, reading_time)}
            className='text-purple-800 font-bold underline mt-4'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;