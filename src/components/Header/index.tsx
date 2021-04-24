import React from 'react'
import HeaderWrapperStyles from './syles.module'

export default function Header() {
    return (
        <HeaderWrapperStyles>
            <ul>
                <li><a href="">Sobre</a></li>
                <li><a href="">Competências</a></li>
                <li><a href="">Formação</a></li>
                <li><a href="">Projetos</a></li>
            </ul>
        </HeaderWrapperStyles>
    )
}

