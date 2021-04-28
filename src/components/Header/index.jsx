import React from 'react'
import Link from 'next/link'
import HeaderWrapperStyles from './syles.module'

export default function Header() {
    return (
        <HeaderWrapperStyles>
            
            <ul>
                <li>
                <Link href="http://localhost:3000/sobre">
                    <a>Sobre</a>
                </Link>
                </li>
                <li>
                <Link href="http://localhost:3000/competencias">
                    <a>Competências</a>
                </Link>
                </li>
                <li>
                <Link href="http://localhost:3000/formacao">
                    <a>Formação</a>
                </Link>
                </li>
                <li>
                <Link href="http://localhost:3000/projetos">
                    <a>Projetos</a>
                </Link>
                </li>
            </ul>
        </HeaderWrapperStyles>
    )
}

