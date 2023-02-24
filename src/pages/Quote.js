import React from 'react';
import Navbar from '../components/Navbar';
import './style.css';

export default function Quote() {
  return (
    <div className="quotepage">
      <Navbar />
      <div className="quote">
        <p>
          Mathematics is not about numbers, equations, computations,
          or algorithms: it is about understanding. - William Paul Thurston
        </p>
      </div>
    </div>
  );
}
