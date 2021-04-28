import React from 'react'
import HeaderWrapperStyles from './syles.module'

export default function Header() {
    return (
        <HeaderWrapperStyles>
            <ul>
                <li><a href="http://localhost:3000/sobre">Sobre</a></li>
                <li><a href="http://localhost:3000/competencias">Competências</a></li>
                <li><a href="http://localhost:3000/formacao">Formação</a></li>
                <li><a href="http://localhost:3000/projetos">Projetos</a></li>
            </ul>
        </HeaderWrapperStyles>
    )
}

