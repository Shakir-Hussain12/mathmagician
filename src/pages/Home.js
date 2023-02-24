import React from 'react';
import Navbar from '../components/Navbar';
import './style.css';

function Home() {
  return (
    <main className="homepage">
      <Navbar />
      <div className="home-container">
        <h2>Welcome to our world!</h2>
        <p>
          Mathematics is a fascinating and complex subject that has inspired
          countless quotes over the years. From famous mathematicians to
          philosophers, writers, and even musicians, many have recognized the
          beauty and importance of mathematics.
        </p>
        <p>
          One well-known quote about mathematics comes from the famous
          physicist Albert Einstein, who once said, &ldquo;Pure mathematics
          is, in its way, the poetry of logical ideas.&rdquo; This quote
          captures the essence of mathematics as a creative and abstract
          pursuit, which involves using logic and reasoning to develop new
          insights and ideas.
        </p>
      </div>
    </main>
  );
}

export default Home;
