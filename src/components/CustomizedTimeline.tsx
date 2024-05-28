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
import {maxWidth} from "@mui/system";
import Image from 'next/image'
import Icon from '@mui/material/Icon';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

export default function CustomizedTimeline() {
    return (
        <Timeline position="alternate" sx={{display: 'flex'}} className="w-full">
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot variant="outlined">
                        <SchoolIcon/>
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography className="text-base" component="span">
                        UFVJM
                    </Typography>
                    <Typography className="text-sm">2017 - Bacharelado em Ciência e Tecnologia</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2}}>
                    <Typography className="text-base" component="span">
                        Projeto de Iniciação Científica
                    </Typography>
                    <Typography className="text-sm">Bolsista de Iniciação Científica</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" >
                        <SchoolIcon/>
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography className="text-base" component="span">
                        UFJF
                    </Typography>
                    <Typography className="text-sm">2019 - Ciência da Computação</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
                    <TimelineDot color="primary" >
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography className="text-base" component="span">
                        Projeto Pró-Inclusão
                    </Typography>
                    <Typography className="text-sm">Bolsista de Extensão</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
                    <TimelineDot color="primary">
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography className="text-base" component="span">
                        CRITT
                    </Typography>
                    <Typography className="text-sm">Bolsista de Inciação Tecnologica</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: '#00995d' }} />
                    <TimelineDot color="primary" sx={{bgcolor: "#00995d"}}>
                        <WorkIcon/>
                    </TimelineDot>
                    <TimelineConnector sx={{bgcolor: "#00995d"}}/>
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography className="text-base" component="span">
                        Hospital Unimed Dr. Hugo Borges
                    </Typography>
                    <Typography className="text-sm">2023 - Estagiário de Suporte TI</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}