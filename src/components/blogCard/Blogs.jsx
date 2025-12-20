import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserAlt, FaCalendarAlt, FaSearch, FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogThunk } from '../../features/blog/blogSlice';
import { getSocMediaThunk } from '../../features/socialMedia/socialSlice';

// const blogPosts = [
//   {
//     id: 1,
//     title: "Planting Seeds in the Hearts of Preschooler",
//     date: "March 8, 2023",
//     author: "admin",
//     comments: 0,
//     image: "https://images.pexels.com/photos/7620209/pexels-photo-7620209.jpeg",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//   },
//   {
//     id: 2,
//     title: "Why children need a Healthy Environment thousand",
//     date: "March 8, 2023",
//     author: "admin",
//     comments: 2,
//     image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//   },
//   {
//     id: 3,
//     title: "Full-day kindergarten in Alberta kindergarten saves families.",
//     date: "March 8, 2023",
//     author: "admin",
//     comments: 1,
//     image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//   },
// ];

const Blogs = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBlogThunk());
    dispatch(getSocMediaThunk());
  }, []);

  const blogPosts = useSelector((state) => state?.blog?.blog || []);
  const socState = useSelector((state) => state?.socMedia?.socMedia || []);

  const filteredPosts = blogPosts.filter(post =>
    post?.heading?.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div className="bg-white text-gray-800 px-4 sm:px-6 lg:px-20 py-12 flex flex-col lg:flex-row gap-10">
      
      {/* Left - Blog Posts */}
      <div className="w-full lg:w-3/4 space-y-10">
        {[...filteredPosts]?.reverse()?.map((post, index) => (
          <motion.div
            key={post?._id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="border border-gray-300 pb-6"
          >
            <img src={post?.images[0]?.url} alt={post?.heading} className="w-full h-72 object-cover mb-5" />
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2 ml-4">
              <span className="flex items-center gap-1"><FaUserAlt className='text-[#FF7350]' /> {post?.author}</span>
              <span className="flex items-center gap-1"><FaCalendarAlt className='text-[#FF7350]' /> {post?.date}</span>
              {/* <span className="flex items-center gap-1"><FaComment className='text-[#FF7350]' /> {post.comments} Comments</span> */}
            </div>
            <h2 className="text-xl font-semibold mb-2 ml-4">{post?.heading}</h2>
            <p className="text-sm text-gray-600 mb-8 ml-4" dangerouslySetInnerHTML={{__html: post?.content.slice(0, 180) + "..."}}></p>
            <Link to={`/read-blog/${post?._id}`} className="mt-4 ml-4 bg-[#00AFAD] text-white px-6 py-4 hover:bg-[#125875] transition">
              Read More
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Right Sidebar */}
      <div className="w-full lg:w-1/4 space-y-8">
        
        {/* Search */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold border-b border-[#FF7350] pb-1">Search</h4>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-[#FF7350] rounded px-4 py-2 text-sm"
            />
            <FaSearch className="absolute right-3 top-2.5 text-gray-400" />
          </div>
        </div>

        {/* Follow Us */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold border-b border-[#FF7350] pb-1">Follow Us</h4>
          {
            socState?.map((soc, i) => {
              return (
                <>
                <div key={i} className="flex space-x-4 text-gray-500 text-lg">
                  <Link to={soc?.facebook}><FaFacebookF className="hover:text-[#1877F2] cursor-pointer transition" /></Link>
                  <Link to={soc?.instagram}><FaInstagram className="hover:text-[#E4405F] cursor-pointer transition" /></Link>
                  <Link to={soc?.twitter}><FaTwitter className="hover:text-[#1DA1CF] cursor-pointer transition" /></Link>
                  <Link to={soc?.youtube}><FaYoutube className="hover:text-[#FF0000] cursor-pointer transition" /></Link>
                </div>
              </>
            )
            })
          }
        </div>

        {/* Recent Posts */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold border-b border-[#FF7350] pb-1">Recent Posts</h4>
          {[...blogPosts]?.reverse()?.map((post, idx) => (
            <Link to={`/read-blog/${post?._id}`} key={idx}>
              <div key={idx} className="flex space-x-4 space-y-5 border-b border-gray-300">
                <img src={post?.images[0]?.url} alt="" className="w-16 h-14 object-cover rounded" />
                <div>
                  <p className="text-sm font-medium text-black hover:underline cursor-pointer">
                    {post?.heading?.slice(0, 40)}...
                  </p>
                  <p className="text-xs text-gray-400">{post?.date}</p>
                </div>
              </div>

            </Link>
          ))}
        </div>

   
      </div>
    </div>
  );
};

export default Blogs;
