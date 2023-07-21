import React from 'react';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './home.css';

const Home = () => {


  const samplePoems = [
    {
      id: 1,
      name: 'Cabdi Qaadir Shube',
      image: process.env.PUBLIC_URL + '/images/Shube.jpeg',
      poemSomali:  
      `Dhallintii waddankaay!
      Dhab baan hadlayaaye,
      Adoo dhimirkaaga
      Ka dhaadhicinaaya

      Warkayga dhegeeyso!
      Ku dhaado dhulkaaga!
      Ka dheefso dhurkiisa!
      Ka dhawrso xumaanta!
     
      Ku dhiirro wanaagga!
      Dhibtaada aqoonso!
      Adduunyada dheeho!
      Ka dheego tacliinta!
     
      Dhiggaa la xisaabtan!
      Dhunyee qarankeenni
      Haddaan dhisan weynno,
      Dhallaanka koraaya
     
      Maxaa u dhigaal ah,
      Hadhow dhaxalkood ah,
      Inanna dhaqan noo ah?`,
  
    },
    {
      id: 2,
      name: 'Garaad Wiil-Waal',
      image: process.env.PUBLIC_URL + '/images/Hadrawi.jpg',
      poemSomali: 
      `War yaroo igu saabsan
      Haddaan weedh ka caddeeyo
      Waa inaad wadartiinba
      Idinkoon i wagliilin
      Waa runtaa i dhahdaan
      Waagaan wiil yar ahaa
      Rag anoon wax la qaybsan
      Wacdi sheekh iyo waano
      Waalidiinta gabowday baan
      Waddada diinta wanaagsan
      Wacdigay hadlayeenbaan
      Ku weeleeyey dhagtayda
      Anoo waansamayoo
      Wadaad fiicanna show ah
      Waysadiyo kitaabkiyo
      Masale aad u wanaagsaniyo
      Weelka daacadda qaataybaad
      Wiilwaal ii bixiseene`,
    },
    {
      id: 3,
      name: 'Ayaan Ahmed Kaaba',
      image: process.env.PUBLIC_URL + '/images/Kaaba.jpg',
      poemSomali: 
      `Calan yahaw kumaad tahay
      Ciirsigaagu waa kee
      Cudud aad ku faantiyo
      Colka qaar la diririyo
      Miyaad ciidan leedahay?
      
      Bulsho aad ku culus tahay
      Miyay kugu cawaysaa
      Ma cir kaad u hoyataa
      Dhulka cidhif ma leedahay?
      
      Cawo qabe miyaad tahay
      Mise ceel dunshaad tahay
      Cilin iyo mid aayo leh
      Labadaa car kee tahay?
      
      Caku daadu badataye
      Bal caddee warkaagoo
      Calan yahaw kumaad tahay?`,
    
    },

   

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
              {/* <div className='poet-poem'>
                <h4 className='poem-heading'>English Translation</h4>
                <p>{poet.poemEnglish}</p>
              </div> */}
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
