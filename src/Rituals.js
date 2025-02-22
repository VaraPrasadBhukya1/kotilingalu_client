import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const Rituals = () => {
  const poojas = [
    { 
      title: 'Abhishekam', 
      image: 'abhishekam.jpg', 
      details: 'A detailed description about the Abhishekam pooja.',
      type: 'Abhishekam', 
      description: 'This is a special pooja where five sacred ingredients are offered to Lord Shiva.',
      benefits: ['Purifies mind and soul', 'Brings prosperity', 'Protects from negative energies'] 
    },
    { 
      title: 'Vayu Linga Pratista', 
      image: '5.jpg', 
      details: 'Details about Vayu Linga Pratista pooja.',
      type: 'Vayu Linga Pratista', 
      description: 'A pooja where the Vayu Linga is established and worshipped.',
      benefits: ['Improves health', 'Protects from ailments', 'Promotes harmony']
    },
    { 
      title: 'Nagabandha Pratista', 
      image: 'nagapratista.jpg', 
      details: 'Details about Nagabandha Pratista pooja.',
      type: 'Nagabandha Pratista', 
      description: 'A ritual performed to seek blessings from Nagas (serpent gods).',
      benefits: ['Removes curse', 'Brings prosperity', 'Provides protection']
    },
    { 
      title: 'Homam', 
      image: 'homam.jpg', 
      details: 'Details about Homam pooja.',
      type: 'Homam', 
      description: 'A sacred fire ritual performed for various divine purposes.',
      benefits: ['Purifies the surroundings', 'Bestows health and wealth', 'Removes negative karma']
    },
    { 
      title: 'Kalyanam', 
      image: 'kalyanam.jpg', 
      details: 'Details about Vayu Linga Pratista pooja.',
      type: 'Kalyanam', 
      description: 'A divine marriage ceremony performed to seek blessings for a harmonious married life.',
      benefits: ['Ensures marital happiness', 'Strengthens relationships', 'Blesses with children']
    },
    { 
      title: 'Archana', 
      image: 'archana.jpg', 
      details: 'Details about Archana pooja.',
      type: 'Archana', 
      description: 'A simple ritual to invoke Lord Shiva’s blessings through chanting of mantras.',
      benefits: ['Improves mental peace', 'Strengthens devotion', 'Removes obstacles']
    },
    { 
      title: 'Navagraha Pooja', 
      image: 'navagraha.jpg', 
      details: 'Details about Navagraha Pooja.',
      type: 'Navagraha Pooja', 
      description: 'A pooja performed to appease the nine planets (Navagrahas) and seek their blessings.',
      benefits: ['Removes malefic effects of planets', 'Brings prosperity', 'Improves personal and professional life']
    },
    { 
      title: 'Maha Lingaarchana', 
      image: 'lingaarchana.jpg', 
      details: 'Details about Maha Lingaarchana pooja.',
      type: 'Maha Lingaarchana', 
      description: 'A special worship done to the Shiva Linga with holy water, milk, and other sacred offerings.',
      benefits: ['Purification of mind', 'Strengthens spiritual practices', 'Gives spiritual enlightenment']
    }
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPooja, setSelectedPooja] = useState(null);

  const openModal = (pooja) => {
    setSelectedPooja(pooja);
    setModalIsOpen(true);
  };
  const handleClose = () => setModalIsOpen(false);

  return (
    <div className="rituals-container">
      <div className="pooja-description">
        <h2>"The one who controls the mind, controls the world." – Lord Shiva</h2>
        <p>Below are the various poojas performed in our temple, each designed to bring peace, prosperity, and divine blessings to all devotees.</p>
      </div>

      {/* Card Layout for Desktop */}
      <div className="pooja-cards">
        {poojas.map((pooja, index) => (
          <div key={index} className="pooja-card" onClick={() => openModal(pooja)}>
            <img src={pooja.image} alt={pooja.title} className="pooja-image" />
            <div className="pooja-title">{pooja.title}</div>
            <button className="know-more-btn">Know More</button>
          </div>
        ))}
      </div>

      {/* Modal for Details */}
      {selectedPooja && (
        <Modal show={modalIsOpen} onHide={handleClose} className='custom-modal' backdrop='static'>
          <Modal.Header closeButton>
          <Modal.Title><h2>{selectedPooja.title}</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Type:</strong> {selectedPooja.type}</p>
          <p><strong>Description:</strong> {selectedPooja.description}</p>
          <p><strong>Benefits:</strong></p>
          <ul>
            {selectedPooja.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default Rituals;
