import React, { useEffect, useState } from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import SearchForm from './section-components/search-form';
import Aboutv1 from './section-components/about-v1';
import Counter from './section-components/counter-v1';
import AboutV2 from './section-components/about-v2';
import Featuresv1 from './section-components/features-v1';
import ProSlider from './section-components/product-slider-v1';
import Apartment from './section-components/apartment-v1';
import VideoV1 from './section-components/video-v1';
import Category from './section-components/category-v1';
import Testimonial from './section-components/testimonial-v1';
import BlogSlider from './blog-components/blog-slider-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

import axios from 'axios';
import Pagination from './components/Pagination';
import Posts from './components/Posts.jsx';
import propertyList from '../assets/json/propertyList.json';
import Paginate from './components/Paginate';

const Home_V1 = () => {
    return (
    <div>
      <Banner />
      </div>
    )
}

export default Home_V1

// const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [postsPerPage, setPostsPerPage] = useState(10);

//     useEffect(() => {
//         const fetchPosts = async () => {
//             setLoading(true);
//             // const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
//             const res = {data: propertyList?.data.home_search.results}
//             setPosts(res.data);
//             setLoading(false);
//         }

//         fetchPosts();
//     }, []);

//     //Get current posts
//     const indexOfLastPost = currentPage * postsPerPage;
//     const indexOfFirstPost = indexOfLastPost - postsPerPage;
//     const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

//     // Change page
//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     return <div className='container mt-5'>
//         <h1 className='text-primary mb-3'></h1>
//         <Posts posts={currentPosts} loading={loading}/>
//         <Paginate postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
//     </div>























