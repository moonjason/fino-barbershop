import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer__socials">
                <h3 className="footer--connect"><em>Connect with Fino</em></h3>
                <div className="footer__icons__container">
                    <FontAwesomeIcon className="footer--icon" size="2x" icon={['fab', 'facebook']}/>
                    <FontAwesomeIcon className="footer--icon" size="2x" icon={['fab', 'instagram']}/>
                    <FontAwesomeIcon className="footer--icon" size="2x" icon={['fab', 'yelp']}/>
                </div>
            </div>
        </div>
    )
}

export default Footer;