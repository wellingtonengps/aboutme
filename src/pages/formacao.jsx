import React from 'react'
import FormacaoWrapper from '../styles/formacao';


export default function Formacao() {
    return (
        <FormacaoWrapper>
            <div>
                <h2>Formação</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices felis sed
                    tellus vestibulum tincidunt. Suspendisse maximus fermentum arcu fermentum aliquet. Nam
                    rutrum magna vel arcu rhoncus suscipit. Nam laoreet pharetra elementum. Sed congue
                    ligula augue, eu ultrices ligula eleifend vel. Nam cursus lectus scelerisque placerat
                    malesuada. Pellentesque fringilla est quis nibh interdum hendrerit. Donec vestibulum
                    metus ut quam aliquet commodo. Etiam non lacinia mi. Vestibulum vel tellus nec ipsum
                    scelerisque lobortis sed non risus. Phasellus rhoncus est eget magna auctor, a consectetur urna pulvinar.
                </p>
            </div>
            <div className="grid">
                <figure>
                    <img src="./logo_ufjf.png" alt="logo ufjf" height="100rem" />
                    <figcaption>(Atualmente) Ciência da Computação</figcaption>
                </figure>
                <figure>
                    <img src="./logo_ufvjm.png" alt="logo ufjf" height="100rem" />
                    <figcaption>Interdiciplinar em Ciência e Tecnologia</figcaption>
                </figure>
            </div>
        </FormacaoWrapper>
    )
}