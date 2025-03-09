import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => (
    <div id='socials'>
        <a href="https://www.linkedin.com/in/orgen-kelmendi" target="_blank" rel="noreferrer">
            <FontAwesomeIcon id='linkedin' icon={faLinkedin} />
        </a>
        <a href="https://github.com/Orgenkelmendi" target="_blank" rel="noreferrer">
            <FontAwesomeIcon id='github' icon={faGithub} />
        </a>
        <a href="https://x.com/kelmendiorgen" target="_blank" rel="noreferrer">
            <FontAwesomeIcon id='twitter' icon={faXTwitter} />
        </a>
    </div>
);

export default SocialLinks;
