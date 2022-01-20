import React from 'react';

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer>
      <p className="center">&copy; Slick's Slices {date}</p>
    </footer>
  );
}
