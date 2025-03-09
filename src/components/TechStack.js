import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faReact, faNode, faDocker, faAws, faGit, faWordpress, faBootstrap, faJira, faFigma } from '@fortawesome/free-brands-svg-icons';

const TechStack = () => (
    <div id='techStack'>
        <div className='iconBox'>
            <FontAwesomeIcon className='icons' icon={faHtml5} />
            <span className='iconText'>HTML5</span>
        </div>
        <div className='iconBox'>
            <FontAwesomeIcon className='icons' icon={faCss3Alt} />
            <span className='iconText'>CSS3</span>
        </div>
        <div className='iconBox'>
            <FontAwesomeIcon className='icons' icon={faJs} />
            <span className='iconText'>JavaScript</span>
        </div>
        <div className='iconBox'>
            <FontAwesomeIcon className='icons' icon={faReact} />
            <span className='iconText'>React</span>
        </div>
        <div className='iconBox'>
            <FontAwesomeIcon className='icons' icon={faNode} />
            <span className='iconText'>Node.js</span>
        </div>
        <div className='iconBox'>
            <FontAwesomeIcon className='icons' icon={faDocker} />
            <span className='iconText'>Docker</span>
        </div>
        <div className='iconBox'>
            <FontAwesomeIcon className='icons' icon={faAws} />
            <span className='iconText'>AWS</span>
        </div>
        <div className='iconBox'>
            <FontAwesomeIcon className='icons' icon={faGit} />
            <span className='iconText'>Git</span>
        </div>
        <div className='iconBox'>
            <FontAwesomeIcon className='icons' icon={faJira} />
            <span className='iconText'>Jira</span>
        </div>
        <div className='iconBox'>
            <FontAwesomeIcon className='icons' icon={faBootstrap} />
            <span className='iconText'>Bootstrap</span>
        </div>
        <div className='iconBox'>
            <FontAwesomeIcon className='icons' icon={faFigma} />
            <span className='iconText'>Figma</span>
        </div>
        <div className='iconBox'>
            <FontAwesomeIcon className='icons' icon={faWordpress} />
            <span className='iconText'>WordPress</span>
        </div>
    </div>
);

export default TechStack;