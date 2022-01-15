import { Link, navigate } from 'gatsby';
import React from 'react';

export default function Nav() {
  //   function goToSlicemasters() {
  //     setTimeout(() => {
  //       console.log('asd');
  //       navigate('/slicemasters', { replace: true });
  //     }, 2000);
  //   }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Hot Now</Link>
        </li>
        <li>
          <Link to="/pizzas">Pizzas</Link>
        </li>
        <li>
          <Link to="/">Logo</Link>
        </li>
        <li>
          <Link to="/slicemasters">SliceMasters</Link>
        </li>
        <li>
          <Link to="/order">Order Ahead</Link>
        </li>
      </ul>
    </nav>
  );
}
