import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Filter from './filter';
import propertyList from '../../assets/json/propertyList.json';
import Property from '../components/Property.jsx';
import PropertyList from '../components/PropertyList';
import Paginate from '../components/Paginate'
import Search from '../components/Search'
import Posts from '../components/Posts.jsx';
import Modal from '../components/Modal';
import Sorter from '../components/Sorter'
import axios from 'axios';

function PropertyListings() {
	
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(6);
	
	//for real estate

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);

			axios.request(options).then(function (response){
				console.log(response.data.data.home_search.results);
				const res = {data: response.data.data.home_search.results}
				console.log(res);
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
			params: {offset: '0', limit: '42', state_code: 'MI', city: 'Detroit', sort: 'newest'},
			headers: {
				'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com',
				'X-RapidAPI-Key': '5acc196857mshe4a6c20d2ae946cp1583d9jsnb9d98e8ac7ef'
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
							<Filter />
						</div>
					</div>
				</div>
			<Modal/>
		</div>
	)
}

export default PropertyListings




// {/* ltn__product-item */}
// <div className="col-xl-6 col-sm-6 col-12">
// <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
// 	<div className="product-img go-top">
// 		<Link to="/product-details"><img src={publicUrl + "assets/img/product-3/1.jpg"} alt="#" /></Link>
// 		<div className="real-estate-agent">
// 			<div className="agent-img">
// 				<Link to="/shop"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" /></Link>
// 			</div>
// 		</div>
// 	</div>
// 	<div className="product-info">
// 		<div className="product-badge">
// 			<ul>
// 				<li className="sale-badg">For Rent</li>
// 			</ul>
// 		</div>
// 		<h2 className="product-title go-top"><Link to="/product-details">New Apartment Nice View</Link></h2>
// 		<div className="product-img-location go-top">
// 			<ul>
// 				<li>
// 					<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
// 				</li>
// 			</ul>
// 		</div>
// 		<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
// 			<li><span>3 </span>
// 				Bed
// 			</li>
// 			<li><span>2 </span>
// 				Bath
// 			</li>
// 			<li><span>3450 </span>
// 				Square Ft
// 			</li>
// 		</ul>
// 		<div className="product-hover-action">
// 			<ul>
// 				<li>
// 					<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
// 						<i className="flaticon-expand" />
// 					</a>
// 				</li>
// 				<li>
// 					<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
// 						<i className="flaticon-heart-1" /></a>
// 				</li>
// 				<li className="go-top">
// 					<Link to="/product-details" title="Product Details">
// 						<i className="flaticon-add" />
// 					</Link>
// 				</li>
// 			</ul>
// 		</div>
// 	</div>
// 	<div className="product-info-bottom">
// 		<div className="product-price">
// 			<span>$34,900<label>/Month</label></span>
// 		</div>
// 	</div>
// </div>
// </div>
// {/* ltn__product-item */}
// <div className="col-xl-6 col-sm-6 col-12">
// <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
// 	<div className="product-img go-top">
// 		<Link to="/product-details"><img src={publicUrl + "assets/img/product-3/2.jpg"} alt="#" /></Link>
// 		<div className="real-estate-agent">
// 			<div className="agent-img">
// 				<Link to="/shop"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" /></Link>
// 			</div>
// 		</div>
// 	</div>
// 	<div className="product-info">
// 		<div className="product-badge">
// 			<ul>
// 				<li className="sale-badg">For Sale</li>
// 			</ul>
// 		</div>
// 		<h2 className="product-title go-top"><Link to="/product-details">New Apartment Nice View</Link></h2>
// 		<div className="product-img-location go-top">
// 			<ul>
// 				<li>
// 					<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
// 				</li>
// 			</ul>
// 		</div>
// 		<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
// 			<li><span>3 </span>
// 				Bed
// 			</li>
// 			<li><span>2 </span>
// 				Bath
// 			</li>
// 			<li><span>3450 </span>
// 				Square Ft
// 			</li>
// 		</ul>
// 		<div className="product-hover-action">
// 			<ul>
// 				<li>
// 					<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
// 						<i className="flaticon-expand" />
// 					</a>
// 				</li>
// 				<li>
// 					<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
// 						<i className="flaticon-heart-1" /></a>
// 				</li>
// 				<li className="go-top">
// 					<Link to="/product-details" title="Product Details">
// 						<i className="flaticon-add" />
// 					</Link>
// 				</li>
// 			</ul>
// 		</div>
// 	</div>
// 	<div className="product-info-bottom">
// 		<div className="product-price">
// 			<span>$34,900<label>/Month</label></span>
// 		</div>
// 	</div>
// </div>
// </div>
// {/* ltn__product-item */}
// <div className="col-xl-6 col-sm-6 col-12">
// <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
// 	<div className="product-img go-top">
// 		<Link to="/product-details"><img src={publicUrl + "assets/img/product-3/3.jpg"} alt="#" /></Link>
// 		<div className="real-estate-agent">
// 			<div className="agent-img">
// 				<Link to="/shop"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" /></Link>
// 			</div>
// 		</div>
// 	</div>
// 	<div className="product-info">
// 		<div className="product-badge">
// 			<ul>
// 				<li className="sale-badg">For Rent</li>
// 			</ul>
// 		</div>
// 		<h2 className="product-title go-top"><Link to="/product-details">New Apartment Nice View</Link></h2>
// 		<div className="product-img-location go-top">
// 			<ul>
// 				<li>
// 					<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
// 				</li>
// 			</ul>
// 		</div>
// 		<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
// 			<li><span>3 </span>
// 				Bed
// 			</li>
// 			<li><span>2 </span>
// 				Bath
// 			</li>
// 			<li><span>3450 </span>
// 				Square Ft
// 			</li>
// 		</ul>
// 		<div className="product-hover-action">
// 			<ul>
// 				<li>
// 					<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
// 						<i className="flaticon-expand" />
// 					</a>
// 				</li>
// 				<li>
// 					<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
// 						<i className="flaticon-heart-1" /></a>
// 				</li>
// 				<li className="go-top">
// 					<Link to="/product-details" title="Product Details">
// 						<i className="flaticon-add" />
// 					</Link>
// 				</li>
// 			</ul>
// 		</div>
// 	</div>
// 	<div className="product-info-bottom">
// 		<div className="product-price">
// 			<span>$34,900<label>/Month</label></span>
// 		</div>
// 	</div>
// </div>
// </div>
// {/* ltn__product-item */}
// <div className="col-xl-6 col-sm-6 col-12">
// <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
// 	<div className="product-img go-top">
// 		<Link to="/product-details"><img src={publicUrl + "assets/img/product-3/4.jpg"} alt="#" /></Link>
// 		<div className="real-estate-agent">
// 			<div className="agent-img">
// 				<Link to="/shop"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" /></Link>
// 			</div>
// 		</div>
// 	</div>
// 	<div className="product-info">
// 		<div className="product-badge">
// 			<ul>
// 				<li className="sale-badg">For Rent</li>
// 			</ul>
// 		</div>
// 		<h2 className="product-title go-top"><Link to="/product-details">New Apartment Nice View</Link></h2>
// 		<div className="product-img-location go-top">
// 			<ul>
// 				<li>
// 					<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
// 				</li>
// 			</ul>
// 		</div>
// 		<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
// 			<li><span>3 </span>
// 				Bed
// 			</li>
// 			<li><span>2 </span>
// 				Bath
// 			</li>
// 			<li><span>3450 </span>
// 				Square Ft
// 			</li>
// 		</ul>
// 		<div className="product-hover-action">
// 			<ul>
// 				<li>
// 					<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
// 						<i className="flaticon-expand" />
// 					</a>
// 				</li>
// 				<li>
// 					<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
// 						<i className="flaticon-heart-1" /></a>
// 				</li>
// 				<li className="go-top">
// 					<Link to="/product-details" title="Product Details">
// 						<i className="flaticon-add" />
// 					</Link>
// 				</li>
// 			</ul>
// 		</div>
// 	</div>
// 	<div className="product-info-bottom">
// 		<div className="product-price">
// 			<span>$34,900<label>/Month</label></span>
// 		</div>
// 	</div>
// </div>
// </div>
// {/* ltn__product-item */}
// <div className="col-xl-6 col-sm-6 col-12">
// <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
// 	<div className="product-img go-top">
// 		<Link to="/product-details"><img src={publicUrl + "assets/img/product-3/5.jpg"} alt="#" /></Link>
// 		<div className="real-estate-agent">
// 			<div className="agent-img">
// 				<Link to="/shop"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" /></Link>
// 			</div>
// 		</div>
// 	</div>
// 	<div className="product-info">
// 		<div className="product-badge">
// 			<ul>
// 				<li className="sale-badg">For Rent</li>
// 			</ul>
// 		</div>
// 		<h2 className="product-title go-top"><Link to="/product-details">New Apartment Nice View</Link></h2>
// 		<div className="product-img-location go-top">
// 			<ul>
// 				<li>
// 					<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
// 				</li>
// 			</ul>
// 		</div>
// 		<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
// 			<li><span>3 </span>
// 				Bed
// 			</li>
// 			<li><span>2 </span>
// 				Bath
// 			</li>
// 			<li><span>3450 </span>
// 				Square Ft
// 			</li>
// 		</ul>
// 		<div className="product-hover-action">
// 			<ul>
// 				<li>
// 					<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
// 						<i className="flaticon-expand" />
// 					</a>
// 				</li>
// 				<li>
// 					<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
// 						<i className="flaticon-heart-1" /></a>
// 				</li>
// 				<li className="go-top">
// 					<Link to="/product-details" title="Product Details">
// 						<i className="flaticon-add" />
// 					</Link>
// 				</li>
// 			</ul>
// 		</div>
// 	</div>
// 	<div className="product-info-bottom">
// 		<div className="product-price">
// 			<span>$34,900<label>/Month</label></span>
// 		</div>
// 	</div>
// </div>
// </div>
// {/* ltn__product-item */}
// <div className="col-xl-6 col-sm-6 col-12">
// <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
// 	<div className="product-img go-top">
// 		<Link to="/product-details"><img src={publicUrl + "assets/img/product-3/6.jpg"} alt="#" /></Link>
// 		<div className="real-estate-agent">
// 			<div className="agent-img">
// 				<Link to="/shop"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" /></Link>
// 			</div>
// 		</div>
// 	</div>
// 	<div className="product-info">
// 		<div className="product-badge">
// 			<ul>
// 				<li className="sale-badg">For Rent</li>
// 			</ul>
// 		</div>
// 		<h2 className="product-title go-top"><Link to="/product-details">New Apartment Nice View</Link></h2>
// 		<div className="product-img-location go-top">
// 			<ul>
// 				<li>
// 					<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
// 				</li>
// 			</ul>
// 		</div>
// 		<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
// 			<li><span>3 </span>
// 				Bed
// 			</li>
// 			<li><span>2 </span>
// 				Bath
// 			</li>
// 			<li><span>3450 </span>
// 				Square Ft
// 			</li>
// 		</ul>
// 		<div className="product-hover-action">
// 			<ul>
// 				<li>
// 					<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
// 						<i className="flaticon-expand" />
// 					</a>
// 				</li>
// 				<li>
// 					<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
// 						<i className="flaticon-heart-1" /></a>
// 				</li>
// 				<li className="go-top">
// 					<Link to="/product-details" title="Product Details">
// 						<i className="flaticon-add" />
// 					</Link>
// 				</li>
// 			</ul>
// 		</div>
// 	</div>
// 	<div className="product-info-bottom">
// 		<div className="product-price">
// 			<span>$34,900<label>/Month</label></span>
// 		</div>
// 	</div>
// </div>
// </div>




// {/* ltn__product-item */}

// {/* ltn__product-item */}
// <div className="col-lg-12">
// <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
// 	<div className="product-img go-top">
// 		<Link to="/product-details"><img src={publicUrl + "assets/img/product-3/2.jpg"} alt="#" /></Link>
// 	</div>
// 	<div className="product-info">
// 		<div className="product-badge-price">
// 			<div className="product-badge">
// 				<ul>
// 					<li className="sale-badg">For Rent</li>
// 				</ul>
// 			</div>
// 			<div className="product-price">
// 				<span>$34,900<label>/Month</label></span>
// 			</div>
// 		</div>
// 		<h2 className="product-title go-top"><Link to="/product-details">New Apartment Nice View</Link></h2>
// 		<div className="product-img-location go-top">
// 			<ul>
// 				<li>
// 					<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
// 				</li>
// 			</ul>
// 		</div>
// 		<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
// 			<li><span>3 </span>
// 				Bed
// 			</li>
// 			<li><span>2 </span>
// 				Bath
// 			</li>
// 			<li><span>3450 </span>
// 				Square Ft
// 			</li>
// 		</ul>
// 	</div>
// 	<div className="product-info-bottom">
// 		<div className="real-estate-agent">
// 			<div className="agent-img">
// 				<Link to="/shop"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" /></Link>
// 			</div>
// 			<div className="agent-brief">
// 				<h6><Link to="/team-details">William Seklo</Link></h6>
// 				<small>Estate Agents</small>
// 			</div>
// 		</div>
// 		<div className="product-hover-action">
// 			<ul>
// 				<li>
// 					<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
// 						<i className="flaticon-expand" />
// 					</a>
// 				</li>
// 				<li>
// 					<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
// 						<i className="flaticon-heart-1" /></a>
// 				</li>
// 				<li className="go-top">
// 					<Link to="/product-details" title="Product Details">
// 						<i className="flaticon-add" />
// 					</Link>
// 				</li>
// 			</ul>
// 		</div>
// 	</div>
// </div>
// </div>
// {/* ltn__product-item */}
// <div className="col-lg-12">
// <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
// 	<div className="product-img go-top">
// 		<Link to="/product-details"><img src={publicUrl + "assets/img/product-3/3.jpg"} alt="#" /></Link>
// 	</div>
// 	<div className="product-info">
// 		<div className="product-badge-price">
// 			<div className="product-badge">
// 				<ul>
// 					<li className="sale-badg">For Rent</li>
// 				</ul>
// 			</div>
// 			<div className="product-price">
// 				<span>$34,900<label>/Month</label></span>
// 			</div>
// 		</div>
// 		<h2 className="product-title go-top"><Link to="/product-details">New Apartment Nice View</Link></h2>
// 		<div className="product-img-location go-top">
// 			<ul>
// 				<li>
// 					<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
// 				</li>
// 			</ul>
// 		</div>
// 		<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
// 			<li><span>3 </span>
// 				Bed
// 			</li>
// 			<li><span>2 </span>
// 				Bath
// 			</li>
// 			<li><span>3450 </span>
// 				Square Ft
// 			</li>
// 		</ul>
// 	</div>
// 	<div className="product-info-bottom">
// 		<div className="real-estate-agent">
// 			<div className="agent-img">
// 				<Link to="/shop"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" /></Link>
// 			</div>
// 			<div className="agent-brief">
// 				<h6><Link to="/team-details">William Seklo</Link></h6>
// 				<small>Estate Agents</small>
// 			</div>
// 		</div>
// 		<div className="product-hover-action">
// 			<ul>
// 				<li>
// 					<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
// 						<i className="flaticon-expand" />
// 					</a>
// 				</li>
// 				<li>
// 					<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
// 						<i className="flaticon-heart-1" /></a>
// 				</li>
// 				<li className="go-top">
// 					<Link to="/product-details" title="Product Details">
// 						<i className="flaticon-add" />
// 					</Link>
// 				</li>
// 			</ul>
// 		</div>
// 	</div>
// </div>
// </div>
// {/* ltn__product-item */}
// <div className="col-lg-12">
// <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
// 	<div className="product-img go-top">
// 		<Link to="/product-details"><img src={publicUrl + "assets/img/product-3/4.jpg"} alt="#" /></Link>
// 	</div>
// 	<div className="product-info">
// 		<div className="product-badge-price">
// 			<div className="product-badge">
// 				<ul>
// 					<li className="sale-badg">For Rent</li>
// 				</ul>
// 			</div>
// 			<div className="product-price">
// 				<span>$34,900<label>/Month</label></span>
// 			</div>
// 		</div>
// 		<h2 className="product-title go-top"><Link to="/product-details">New Apartment Nice View</Link></h2>
// 		<div className="product-img-location go-top">
// 			<ul>
// 				<li>
// 					<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
// 				</li>
// 			</ul>
// 		</div>
// 		<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
// 			<li><span>3 </span>
// 				Bed
// 			</li>
// 			<li><span>2 </span>
// 				Bath
// 			</li>
// 			<li><span>3450 </span>
// 				Square Ft
// 			</li>
// 		</ul>
// 	</div>
// 	<div className="product-info-bottom">
// 		<div className="real-estate-agent">
// 			<div className="agent-img">
// 				<Link to="/shop"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" /></Link>
// 			</div>
// 			<div className="agent-brief">
// 				<h6><Link to="/team-details">William Seklo</Link></h6>
// 				<small>Estate Agents</small>
// 			</div>
// 		</div>
// 		<div className="product-hover-action">
// 			<ul>
// 				<li>
// 					<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
// 						<i className="flaticon-expand" />
// 					</a>
// 				</li>
// 				<li>
// 					<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
// 						<i className="flaticon-heart-1" /></a>
// 				</li>
// 				<li className="go-top">
// 					<Link to="/product-details" title="Product Details">
// 						<i className="flaticon-add" />
// 					</Link>
// 				</li>
// 			</ul>
// 		</div>
// 	</div>
// </div>
// </div>
// {/* ltn__product-item */}
// <div className="col-lg-12">
// <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
// 	<div className="product-img go-top">
// 		<Link to="/product-details"><img src={publicUrl + "assets/img/product-3/5.jpg"} alt="#" /></Link>
// 	</div>
// 	<div className="product-info">
// 		<div className="product-badge-price">
// 			<div className="product-badge">
// 				<ul>
// 					<li className="sale-badg">For Rent</li>
// 				</ul>
// 			</div>
// 			<div className="product-price">
// 				<span>$34,900<label>/Month</label></span>
// 			</div>
// 		</div>
// 		<h2 className="product-title go-top"><Link to="/product-details">New Apartment Nice View</Link></h2>
// 		<div className="product-img-location go-top">
// 			<ul>
// 				<li>
// 					<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
// 				</li>
// 			</ul>
// 		</div>
// 		<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
// 			<li><span>3 </span>
// 				Bed
// 			</li>
// 			<li><span>2 </span>
// 				Bath
// 			</li>
// 			<li><span>3450 </span>
// 				Square Ft
// 			</li>
// 		</ul>
// 	</div>
// 	<div className="product-info-bottom">
// 		<div className="real-estate-agent">
// 			<div className="agent-img">
// 				<Link to="/shop"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" /></Link>
// 			</div>
// 			<div className="agent-brief">
// 				<h6><Link to="/team-details">William Seklo</Link></h6>
// 				<small>Estate Agents</small>
// 			</div>
// 		</div>
// 		<div className="product-hover-action">
// 			<ul>
// 				<li>
// 					<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
// 						<i className="flaticon-expand" />
// 					</a>
// 				</li>
// 				<li>
// 					<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
// 						<i className="flaticon-heart-1" /></a>
// 				</li>
// 				<li className="go-top">
// 					<Link to="/product-details" title="Product Details">
// 						<i className="flaticon-add" />
// 					</Link>
// 				</li>
// 			</ul>
// 		</div>
// 	</div>
// </div>
// </div>