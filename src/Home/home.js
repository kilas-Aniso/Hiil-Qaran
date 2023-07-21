import React from 'react';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './home.css';

const Home = () => {
  // Sample data for famous poets and their work
  // ... (ame as previous code)

  const samplePoems = [
    {
      id: 1,
      name: 'Nuruddin Farah',
      image: process.env.PUBLIC_URL + '/images/Nuurdiin.jpeg',
      poemSomali: `Intii ahaa xaabsadeyn,
      Oon xusuusta hadaladda maansada
      Jidhka kala noo xaqiijo
      Mahadi dhaamis ka daadisay`,
      poemEnglish: `In the shimmering haze of time,
      Where the past and present intertwine,
      A poet's words did gently chime,
      Unraveling tales of a distant clime.`,
    },
    {
      id: 2,
      name: 'Hadraawi',
      image: process.env.PUBLIC_URL + '/images/Hadrawi.jpg',
      poemSomali: `Dhulka ka naxo intaa kii naafisa ka hawlgasho
      Ninkayga baa iga aado dheh
      Ninkii iga hortaagay baa igu qaraabo`,
      poemEnglish: `Beneath the vast Somali skies,
      Where stars like fireflies arise,
      The poet's voice forever flies,
      Painting dreams before our eyes.`,
    },
    {
      id: 1,
      name: 'Nuruddin Farah',
      image: process.env.PUBLIC_URL + '/images/Nuurdiin.jpeg',
      poemSomali: `Intii ahaa xaabsadeyn,
      Oon xusuusta hadaladda maansada
      Jidhka kala noo xaqiijo
      Mahadi dhaamis ka daadisay`,
      poemEnglish: `In the shimmering haze of time,
      Where the past and present intertwine,
      A poet's words did gently chime,
      Unraveling tales of a distant clime.`,
    },
   

    // Add more sample poets and poems here
  ];


  return (
    <div className='home-container'>
      <header className='banner'>
        <h1 className='main-title'>Preserving & Celebrating Somali Culture</h1>
        <p className='subtitle'>Explore the Beauty of Somali Literature and Poems</p>
      </header>
      <section className='content-section'>
        <div className='content-left'>
          <h2 className='section-title'>Discover the Richness of Somali Poetry</h2>
          <p className='section-text'>
            At the heart of Somali culture lies poetry, a beautiful form of communication, entertainment, and a way to preserve history and identity. With its unique phonetic qualities and vivid metaphors, the Somali language brings life to mesmerizing poetic creations that transcend boundaries and connect souls.
          </p>
        </div>
        <div className='content-right'>
          <div className='image-container'>
            <img
              src={process.env.PUBLIC_URL + '/images/momDaughter.png'}
              alt='Somali Literature'
              className='image'
            />
          </div>
        </div>
      </section>
      <section className='famous-poets-section'>
        <h2 className='famous-poets-title'>Explore the Words of Famous Somali Poets</h2>
        <div className='famous-poets-list'>
          {samplePoems.map((poet) => (
            <div key={poet.id} className='poet-card'>
              <img src={poet.image} alt={poet.name} className='poet-image' />
              <h3 className='poet-name'>{poet.name}</h3>
              <div className='poet-poem'>
                <h4 className='poem-heading'>Original Poem (Somali)</h4>
                <p>{poet.poemSomali}</p>
              </div>
              <div className='poet-poem'>
                <h4 className='poem-heading'>English Translation</h4>
                <p>{poet.poemEnglish}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className='footer'>
  <p className='footer-text'>
    &copy; 2023 Hiil Qaran. All rights reserved.
    <span className='center-icons'>
      Follow us on social media:
      <span className='social-icons'>
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faFacebookF} className='social-icon' />
        </a>
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faTwitter} className='social-icon' />
        </a>
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faInstagram} className='social-icon' />
        </a>
      </span>
    </span>
  </p>
</footer>

    </div>
  );
};

export default Home;
