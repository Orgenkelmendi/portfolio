import React from 'react';
import { ReactTyped } from "react-typed";

const Landing = () => (
    <div id='landing'>
        <p>
            <ReactTyped strings={
                [
                    "<span id='frontend'> Front End</span> Developer.",
                    "<span id='tech'>Tech</span> Enthusiast.",
                    "<span id='lifetime'>Lifetime</span> Learner."
                ]
            }
                typeSpeed={100}
                backSpeed={100}
                cursorChar=">"
                showCursor="true"
                loop />
        </p>
    </div>
);

export default Landing;