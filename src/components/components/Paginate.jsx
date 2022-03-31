import React from 'react'
import { Link } from 'react-router-dom';

const Paginate = ({ postsPerPage, totalPosts, paginate, currentPage }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <div className="ltn__pagination-area text-center">
            <div className="ltn__pagination">
                <ul>
                    <li><Link to="#" onClick={() => paginate(currentPage - 1)}><i className="fas fa-angle-double-left" /></Link></li>
                    {pageNumbers.map(number => (
                    <li key={number}>
                        <Link to="#" onClick={() => paginate(number)} className='page-link active'>
                            {number}
                        </Link>
                    </li>
                ))}
                    <li><Link to="#" onClick={() => paginate(currentPage + 1)}><i className="fas fa-angle-double-right" /></Link></li>
                </ul>
            </div>
        </div>

    )

}

export default Paginate


{/* <li><Link to="#">1</Link></li>
<li className="active"><Link to="#">2</Link></li>
<li><Link to="#">3</Link></li>
<li><Link to="#">...</Link></li>
<li><Link to="#">10</Link></li> */}