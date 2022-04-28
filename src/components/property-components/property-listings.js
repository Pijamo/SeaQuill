import React, { Component, useEffect, useState } from 'react';

import Paginate from '../components/Paginate'
import Posts from '../components/Posts.jsx';
import Sorter from '../components/Sorter'
import axios from 'axios';
import Sidebar from './filter'
import config from '../../config.json'

function PropertyListings({ userChoice: { state, city, minPrice, maxPrice } }) {
	
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(6);

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			axios.request(options).then(function (response){
				// console.log(response.data.data.home_search.results);
				const res = {data: response.data.data?.home_search.results}
				// console.log(res);
				setPosts(res.data);
				setLoading(false);
			}).catch(function (error) {
				console.log(error)
			})
			// const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
			// const res = {data: propertyList?.data.home_search.results}
			// console.log(res)
			// setPosts(res.data);
			// setLoading(false);
		}

		const options = {
			method: 'GET',
			url: 'https://us-real-estate.p.rapidapi.com/v2/for-sale',
			params: {offset: '0', limit: '42', state_code: state, city: city, sort: 'newest', price_min: minPrice, price_max: maxPrice},
			headers: {
				'X-RapidAPI-Host': config.API_host,
				'X-RapidAPI-Key': config.API_key
			}
		};

		fetchPosts();
		}, []);
	
		// async componentDidMount() {
		// 	this.setState({ data: propertyList?.data.home_search.results })
		// }

	//Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	const perPage = (pageNumber) => setPostsPerPage(pageNumber);

		return (
			<div>
				<div className="ltn__product-area ltn__product-gutter">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 order-lg-2 mb-100">
								<Sorter perPage={perPage}/>
								<Posts posts={currentPosts} loading={loading}/>
								<Paginate postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentPage}/>
							</div>
						</div>
					</div>
				</div>
			
		</div>
	)
}

export default PropertyListings