import React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

import BookIcon from '@mui/icons-material/Book';
import WebIcon from '@mui/icons-material/LaptopChromebook';
import SoftwareIcon from '@mui/icons-material/Code';
import './TimeLine.css';

export const TimeLine = (props) => {
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant='body2'
                color='#fefefe'
            >
                {props.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color='primary' variant='outlined'>
                    {props.icon === '0' && <SoftwareIcon />}
                    {props.icon === '1' && <BookIcon />}
                    {props.icon === '2' && <WebIcon />}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant='h6' component='span'>
                    {props.title}
                </Typography>
                <Typography>{props.description}</Typography>
            </TimelineContent>
        </TimelineItem>
    );
};
