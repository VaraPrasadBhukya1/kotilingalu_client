import React, { useState } from 'react';

function Home() {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="gallery-container">
          {/* <div className="gallery-item">
            <img src="1.jpg" alt="1" />
          </div> */}
          <div className="gallery-item">
            <img src="4.jpg" alt="3" />
          </div>
          {/* <div className="gallery-item">
            <img src="5.jpg" alt="4" />
          </div> */}
        </div>
      </section>

      {/* About Section */}
      <div className="about-container">
        <h3 className="about-heading">About Sri Kotilinga Hari Hara Mahakshetram</h3>
        <p className="about-paragraph">
      Sri Kotilinga Hari Hara Mahakshetram is situated on the banks of the Krishna river, at Muktyala village. Sages like Baradwaja performed severe penance and got salvation here. The Krishna River flows north at this place & it is known as Uttaravahani. Due to its sacredness, it got the name Uttarkashi. 
      
      {isExpanded ? (
        <>
          The main deity in the Garbhalaya is Pancha mukha Amruta Lingeswara Swamy. The lord has four faces on four sides, one face- Urdhva mukha. There are four Nandis facing the shiva linga on four sides. Sri Kotilinga Pancha Mukha Amrita Lingeswara Swamy temple was constructed in five stories vimana. This temple alone has five phases and four entrances. There is a big Nandi in the temple. During the Tretayuga sage, Baradwaj set a hermitage here and used to have a holy dip in the Krishna waters. it is said that a couple of Nandieeswara were seen. Still, the devotees believe that one golden shivas temple is situated in the depths of the water. The great Rushya Srunga Maharshi performed penance in the cave nearby. The chanting of Sama Gana was heard from the cave and was written in Brahmanda Purana. It owned four dwajastambas at four sides and on either side of the Shivaji’s temple. In the Mukteswara Mahakshetra, a Sivalaya was constructed by BaliChakravarthi. Lord Shiva was visited by Lord Shri Rama and Lakshmana in Tretayuga, and also by Pandavas in Dwarparayuga. The Shatavahanas and many kings visited Mukteswaralaya. In 1946 Sree Chandrasekhara Saraswathi of Sree Kanchi Kamakoti Peetham, known as the incarnation of Lord Shiva also visited this sacred place. This temple is adorned with Shat Ganapathi’s and Shat Subramanya’s temples. It is also adorned with 108 sub-temples and LordVenkateswara along with his consorts Sridevi and Bhudevi is also seated here. The temple is under the endowment department and the department is developing it. Anyone can do linga Prathista here. On the eastern side of the temple, there are Dwadasa jyotirlinga temples. The temple authorities want to install Koti Lingala – which means to install one crore Shiva lingas. There is a big Shiva idol on the premises. The Lord is known as Kamakshi Sameta Pancha mukha Amruta Lingeswara Swamy.
        </>
      ) : (
        <span>
          The main deity in the Garbhalaya is Pancha mukha Amruta Lingeswara Swamy. The lord has four faces on four sides, one face- Urdhva mukha. There are four Nandis facing the shiva linga on four sides...
        </span>
      )}
      <span onClick={toggleReadMore} className="read-more-btn"> {isExpanded ? 'Read Less' : 'Read More...'}</span>
    </p>

        <h3 className="about-heading">Temple Timings</h3>
        <span className="about-paragraph">
          Mornings: 06:00 AM – 12:30 PM <br /> Evenings: 04:00 PM – 07:30 PM
        </span>

        <h3 className="about-heading">Festivals celebrated</h3>
        <span className="about-paragraph">Mahashivaratri, Karthika Masam, Ugadi.</span>

        <h3 className="about-heading">Address</h3>
        <span className="about-paragraph">
        KotiLingala Road, Jaggayapeta Mandal, Mukteswarapuram, Jaggayyapeta, Krishna District, Andhra Pradesh, 521457
        </span>

        <h3 className="about-heading">Sri Kotilinga Hari Hara Mahakshetram Map</h3>
        <span className="map-description">Click on the location icon for the route</span>
        <a href="https://goo.gl/maps/bmYi7SWmrLvvV4VX8" target="_blank" rel="noopener noreferrer" className="map-link">
          <img src="map.png" alt="map" className="map-image" />
        </a>
      </div>
    </>
  );
};

export default Home;
