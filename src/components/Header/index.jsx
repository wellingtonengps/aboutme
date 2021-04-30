import React from 'react'
import Link from 'next/link'
import HeaderWrapperStyles from './syles.module'

export default function Header() {
    return (
        <HeaderWrapperStyles>

            <ul>
                <li>
                    <Link href="/">
                        <a>Sobre</a>
                    </Link>
                </li>
                <li>
                    <Link href="/competencias">
                        <a>Competências</a>
                    </Link>
                </li>
                <li>
                    <Link href="/formacao">
                        <a>Formação</a>
                    </Link>
                </li>
                <li>
                    <Link href="/projetos">
                        <a>Projetos</a>
                    </Link>
                </li>
            </ul>
        </HeaderWrapperStyles>
    )
}

