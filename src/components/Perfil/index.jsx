import React from 'react'
import { PerfilWrapperStyles, SocialWrapperStyles } from './styles.module'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail, SiDiscord, SiInstagram, SiSpotify } from "react-icons/si";
import Animation from './Animacao/Animation'


export default function Perfil() {
    return (
        <PerfilWrapperStyles>
            <img src="./2.jpg" alt="foto wellington" />
            <div>
                <h1>Wellington P. Silva</h1>
                <h2>Ciência da Computação</h2>

            </div>
            <SocialWrapperStyles>
                <ul>
                    <li><a href="https://github.com/wellingtonengps" target="_blank"><AiFillGithub size="1.5rem" /></a></li>
                    <li><a href="https://www.linkedin.com/in/wellingtonengps/" target="_blank"><AiFillLinkedin size="1.5rem" /></a></li>
                    <li><a href="" target="_blank"><SiGmail size="1.5rem" /></a></li>
                    <li><a href="" target="_blank"><SiDiscord size="1.5rem" /></a></li>
                    <li><a href="" target="_blank"><SiInstagram size="1.5rem" /></a></li>
                    <li><a href="" target="_blank"><SiSpotify size="1.5rem" /></a></li>
                </ul>
            </SocialWrapperStyles>
            <Animation />
        </PerfilWrapperStyles>
    )
}

