import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './DropDown.css';

const angleDown = <FontAwesomeIcon icon={faAngleDown} />;
const angleUp = <FontAwesomeIcon icon={faAngleUp} />;

const DropDown = (appartement) => {

    const [openTab, setOpenTab] = useState(false);
    const openTabHandler = () => { setOpenTab((openTab) => !openTab) };

    return (
        <div>
            <div onClick={openTabHandler} className='menu_dropdown'>
                <div className='title'>{appartement.title}</div>
                {!openTab ? <i className='angle_down'>{angleDown}</i> : <i className='angle_up'>{angleUp}</i>}
            </div>
            {openTab && (
                <div className='content_menu_dropdown'>
                    {Array.isArray(appartement.content) ? (
                        <ul>
                            {appartement.content.map((item, index) => (
                                <div key={index}>{item}</div>
                            ))}
                        </ul>
                    ) : (
                        <p>{appartement.content}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default DropDown;