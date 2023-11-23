import React from 'react';
import './About.css';
import DropDown from '../DropDown/DropDown.jsx';

function About() {

    return (
        <div className='padding_about'>
            <div className='banner_about'>
                <img src='/banner_about.png' alt='Image de bannière pour la page À propos' className='banner_about_image' />
            </div>

            <div className='column_about'>
                <div className='flex_column_about'>
                    <DropDown title='Fiabilité' content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
                </div>
                <div className='flex_column_about'>
                    <DropDown title='Respect' content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                </div>
                <div className='flex_column_about'>
                    <DropDown title='Service' content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
                </div>
                <div className='flex_column_about'>
                    <DropDown title='Sécurité' content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
                </div>
            </div>
        </div>
    );
}

export default About;