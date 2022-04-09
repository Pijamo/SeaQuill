import React, { useEffect, useState } from 'react';
import Banner from './section-components/banner';

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























