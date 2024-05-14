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
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                        <FastfoodIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        UFVJM
                    </Typography>
                    <Typography>2017 - Bacharelado em Ciência e Tecnologia</Typography>
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
                    <Typography variant="h6" component="span">
                        Iniciação Científica
                    </Typography>
                    <Typography>bla bla bla</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        UFJF
                    </Typography>
                    <Typography>2019 - Ciência da Computação</Typography>
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
                    <Typography variant="h6" component="span">
                        Projeto Extensão
                    </Typography>
                    <Typography>Desenvolvedor React Native</Typography>
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
                    <Typography variant="h6" component="span">
                        CRITT
                    </Typography>
                    <Typography>Bolsista Inciação Tecnologica: Suporte TI</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: '#00995d' }} />
                    <TimelineDot sx={{bgcolor: "#00995d"}}>
                        <RepeatIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{bgcolor: "#00995d"}}/>
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Hospital Unimed Dr. Hugo Borges
                    </Typography>
                    <Typography>2023 - Estagiário de Suporte TI</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}