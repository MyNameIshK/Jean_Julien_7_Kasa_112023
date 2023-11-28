import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';
import "./AppartementDescription.css";
import DropDown from '../DropDown/DropDown.jsx';

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const starArray = Array.from({ length: 5 }, (_, index) => {
    if (index < fullStars) {
      return <FontAwesomeIcon key={index} icon={faStar} className='faStar_red' />;
    } else {
      return <FontAwesomeIcon key={index} icon={faStar} className='faStart_grey' />;
    }
  });

  return <div className="star-rating">{starArray}</div>;
}

function AppartementDescription() {
  const { id } = useParams();
  const [appartement, setAppartement] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        const selectedAppartement = data.find(appartement => appartement.id === id);

        if (!selectedAppartement) {
          navigate("/errorPage");
        }

        setAppartement(selectedAppartement);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id, navigate]);

  const nextImage = () => { setCurrentImageIndex((image) => (image + 1) % appartement.pictures.length) };
  const prevImage = () => { setCurrentImageIndex((image) => (image - 1 + appartement.pictures.length) % appartement.pictures.length) };

  return (
    <div>
      {appartement && (
        <div className='section_container'>
          <div className='container'>
            <div className='carrousel'>
              <img src={appartement.pictures[currentImageIndex]} alt={appartement.title} />
              <div className='btn-carrousel' style={{ display: appartement.pictures.length > 1 ? 'flex' : 'none' }}>
                <div className='left' onClick={prevImage}><FontAwesomeIcon icon={faAngleLeft} /></div>
                <div className='right' onClick={nextImage}><FontAwesomeIcon icon={faAngleRight} /></div>
              </div>
              <div className='slide-count'>{currentImageIndex + 1}/{appartement.pictures.length}</div>
            </div>
          </div>
          <div className='bloc_description'>
            <div className='first_section'>
              <div className='title_appartement'>{appartement.title}</div>
              <div className='location_appartement'>{appartement.location}</div>
              <div className='tags_appartement'>{appartement.tags.map(tag => (<div key={tag} className='tag'>{tag}</div>))}</div>
            </div>
            <div className='second_section'>
              <div className='container_host'>
                <div className='name_host_appartement'>{appartement.host.name}</div>
                <img src={appartement.host.picture} alt="Host" className='picture_host_appartement' />
              </div>
              <StarRating rating={appartement.rating} />
            </div>
          </div>
          <div>
            <div className='third_section'>
              <div className='flex_direction_column'>
                <DropDown title="Description" content={appartement.description} />
              </div>
              <div className='flex_direction_column'>
                <DropDown title="Equipements" content={appartement.equipments} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default AppartementDescription;