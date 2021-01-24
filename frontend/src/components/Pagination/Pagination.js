import React, { useEffect } from 'react';
import './pagination-style.css';

export default function Pagination(props) {
  const paginate = props.paginate;

  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(props.totalUsers / props.usersPerPage); i++) {
    pageNumbers.push(i);
  }
  
  return (
    <nav className="pagination-container">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item" onClick={() => paginate(number)} >
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
} 