import React from 'react'

const Sorter = ( {perPage} ) => {

	return (
		<div className="ltn__shop-options">
			<ul className="justify-content-start">
				<li>
					<div className="ltn__grid-list-tab-menu ">
						<div className="nav">
							<a className="active show" data-bs-toggle="tab" href="#liton_product_grid"><i className="fas fa-th-large" /></a>
							<a data-bs-toggle="tab" href="#liton_product_list"><i className="fas fa-list" /></a>
						</div>
					</div>
				</li>
				{/* <li className="d-none">
					<div className="showing-product-number text-right">
						<span>Showing 1–12 of 18 results</span>
					</div>
				</li>
				<li>
					<div className="short-by text-center">
						<select className="nice-select">
							<option>Default Sorting</option>
							<option>Sort by popularity</option>
							<option>Sort by new arrivals</option>
							<option>Sort by price: low to high</option>
							<option>Sort by price: high to low</option>
						</select>
					</div>
				</li>
				<li>
					<div className="short-by text-center">
						<select className="nice-select">
							<option>Per Page: 6</option>
							<option>Per Page: 8</option>
							<option>Per Page: 10</option>
							<option>Per Page: 12</option>
						</select>
					</div>
				</li> */}
			</ul>
		</div>
	)

}

export default Sorter