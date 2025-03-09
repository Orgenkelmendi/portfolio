import React from 'react';
import outdoorKosovaLogo from '../images/outdoor_kosova.png';
import flzsSolutionsLogo from '../images/flzs_solutions.png';
import testbenchLogo from '../images/testbench.jpg';

const Projects = () => (
    <div id='projects'>
        <div className='project'>
            <h2>Outdoor Kosova</h2>
            <div className='projectBox'>
                <img src={outdoorKosovaLogo} alt='Outdoor Kosova' />
                <div>
                    <p>User-friendly, SEO-optimized booking website for a Top-Balkan Tour Operator. Started from scratch with HTML, CSS, and JavaScript, and brought it to life on WordPress for a smooth and seamless experience. </p>
                    <a href='https://www.outdoorkosova.com' target='_blank' rel="noreferrer">TAKE A LOOK</a>
                </div>
            </div>
        </div>
        <div className='project'>
            <h2>FLZS Solutions</h2>
            <div className='projectBox'>
                <img src={flzsSolutionsLogo} alt='FLZS Solutions' />
                <div>
                    <p>Full-stack website for a Swiss marketing agency, combining React, Node.js, and TailwindCSS for a modern and responsive design. Collaborated efficiently using Git for version control and Jira to keep the development process organized and on track.</p>
                    <a href='https://www.flzssolutions.ch' target='_blank' rel="noreferrer">TAKE A LOOK</a>
                </div>
            </div>
        </div>
        <div className='project'>
            <h2>TestBench</h2>
            <div className='projectBox'>
                <img src={testbenchLogo} alt='TestBench' />
                <div>
                    <p>Load Testing Software designed to empower testers, developers, and product owners in creating and evaluating test sessions. The front-end, built with React, delivers a high-performance, interactive, and user-friendly interface for an enhanced UI/UX experience.</p>
                    <a href='https://www.imbus.de' target='_blank' rel="noreferrer">TAKE A LOOK</a>
                </div>
            </div>
        </div>
    </div>
);

export default Projects;