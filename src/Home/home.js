import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div>
      <div className='banner'>
        <h1 className='h1'>Explore Somali Literature and Poems</h1>
        <p className='subtitle'>Preserving and Celebrating a Rich Cultural Heritage</p>
        <div className='search-bar'>
          <input type='text' placeholder='Search...' className='search-input' />
          <button className='search-button'>Search</button>
        </div>
      </div>
      <div className='content-section'>
        <div className='content-left'>
          <h2 className='section-title'>Hiil Qaran: Unveiling the Treasures of Somali Literature</h2>
          <p className='section-text'>
            Welcome to Hiil Qaran, where the vibrant tapestry of Somali culture unfolds through its treasured literature and captivating poetry. Immerse yourself in a journey that transcends time, as we delve into the profound heritage and poetic traditions that have shaped the Somali people.
          </p>
          <p className='section-text'>
            Poetry, at the very heart of Somali culture, weaves intricate threads of communication, entertainment, and the preservation of history and identity. As the Somali language resonates with unique phonetic qualities and vivid metaphors, it breathes life into mesmerizing poetic compositions that transcend boundaries and connect souls.
          </p>
          <p className='section-text'>
            At Hiil Qaran, our mission is to illuminate the works of talented Somali authors, both past and present, celebrating their remarkable contributions to the literary world. With each word, we seek to deepen the understanding and appreciation of Somali literature's cultural significance, unveiling a realm of imagination and wisdom.
          </p>
        </div>
        <div className='content-right'>
          <div className='image-container'>
            <img
              src={process.env.PUBLIC_URL + '/images/som.png'}
              alt='Somali Literature'
              className='image'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
