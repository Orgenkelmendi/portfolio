import React from 'react';
// react-timeline
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from '@mui/icons-material/Work';
import Typography from '@mui/material/Typography';

const TimelineComponent = () => (
    <div id='timeline'>
        {/* Timeline */}
        <Timeline position="left">
            {/* Item 1 */}
            <TimelineItem>
                <TimelineOppositeContent
                    id='firstTimeline'
                    sx={{ m: 'auto 0', fontFamily: 'Rubik, sans-serif' }}
                    align="right"
                    variant="body2"
                    color="white"
                >
                    September 2024 - Present
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot style={{ backgroundColor: '#BCD97E' }}>
                        <WorkIcon style={{ color: 'black' }} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography sx={{ fontFamily: 'Rubik, sans-serif' }} variant="h6" component="span" style={{ color: 'white' }}>
                        NY Vein Center
                    </Typography>
                    <Typography sx={{ fontFamily: 'Rubik, sans-serif' }} style={{ color: 'white' }}>
                        Lead Front End Developer
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            {/* Item 2 */}
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0', fontFamily: 'Rubik, sans-serif' }}
                    align="right"
                    variant="body2"
                    color="white"
                >
                    July 2022 - March 2024
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot style={{ backgroundColor: '#BCD97E' }}>
                        <WorkIcon style={{ color: 'black' }} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography sx={{ fontFamily: 'Rubik, sans-serif' }} variant="h6" component="span" style={{ color: 'white' }}>
                        Appstellar
                    </Typography>
                    <Typography sx={{ fontFamily: 'Rubik, sans-serif' }} style={{ color: 'white' }}>
                        Front End Developer
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            {/* Item 3 */}
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0', fontFamily: 'Rubik, sans-serif' }}
                    align="right"
                    variant="body2"
                    color="white"
                >
                    September 2021 - June 2022
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot style={{ backgroundColor: '#BCD97E' }}>
                        <WorkIcon style={{ color: 'black' }} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography sx={{ fontFamily: 'Rubik, sans-serif' }} variant="h6" component="span" style={{ color: 'white' }}>
                        Imbus A.G.
                    </Typography>
                    <Typography sx={{ fontFamily: 'Rubik, sans-serif' }} style={{ color: 'white' }}>
                        Front End Developer
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            {/* Item 4 */}
            <TimelineItem>
                <TimelineOppositeContent
                    id='lastTimeline'
                    sx={{ m: 'auto 0', fontFamily: 'Rubik, sans-serif' }}
                    align="right"
                    variant="body2"
                    color="white"
                >
                    September 2018 - July 2021
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot style={{ backgroundColor: '#BCD97E' }}>
                        <WorkIcon style={{ color: 'black' }} />
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography sx={{ fontFamily: 'Rubik, sans-serif' }} variant="h6" component="span" style={{ color: 'white' }}>
                        jCoders
                    </Typography>
                    <Typography sx={{ fontFamily: 'Rubik, sans-serif' }} style={{ color: 'white' }}>
                        Front End Developer
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            {/* Timeline Bottom */}
        </Timeline>
    </div>
);

export default TimelineComponent;