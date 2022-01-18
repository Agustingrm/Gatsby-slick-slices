import React from 'react';

export default function Footer() {
  const date = new Date().setFullYear();
  return (
    <footer>
      <p>&copy; Slick's Slices {date}</p>
    </footer>
  );
}
