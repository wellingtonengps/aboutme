import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';


export default function CustomizedTimeline() {

    return (
        <Timeline className="rotate-90" position="alternate" >
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot className="-rotate-90">
                        <FastfoodIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }} className="text-left">
                    <Typography variant="h6" component="span" className="inline-block -rotate-90 text-center min-w-12">
                        Eat
                    </Typography>
                    <Typography className="inline-block -rotate-90 text-center min-w-12">Because you need strength</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" className="-rotate-90">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }} className="text-left">
                    <Typography variant="h6" component="span" className="inline-block -rotate-90 text-center min-w-12">
                        Code
                    </Typography>
                    <Typography className="inline-block -rotate-90 text-center min-w-12">Because it&apos;s awesome!</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined" className="-rotate-90">
                        <HotelIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }} className="text-left">
                    <Typography variant="h6" component="span" className="inline-block -rotate-90 text-center min-w-12">
                        Sleep
                    </Typography>
                    <Typography className="inline-block -rotate-90 text-center min-w-12">Because you need rest</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    <TimelineDot color="secondary" className="-rotate-90">
                        <RepeatIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }} className="text-left">
                    <Typography variant="h6" component="span" className="inline-block -rotate-90 text-center min-w-12">
                        Repeat
                    </Typography>
                    <Typography className="inline-block -rotate-90 text-center min-w-12">Because this is the life you love!</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}