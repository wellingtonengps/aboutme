import React from 'react'

import Lottie from 'react-lottie';
import { SobreWrapper } from '../styles/sobre';
import animationData from './Sobre.json';

function Animation() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={300}
                width={300}
            />
        </div>
    );
}


export default function Secao() {
    return (
        <SobreWrapper>
            <h2>Hello World!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices felis sed tellus vestibulum tincidunt. Suspendisse maximus fermentum arcu fermentum aliquet. Nam rutrum magna vel arcu rhoncus suscipit. Nam laoreet pharetra elementum. Sed congue ligula augue, eu ultrices ligula eleifend vel. Nam cursus lectus scelerisque placerat malesuada. Pellentesque fringilla est quis nibh interdum hendrerit. Donec vestibulum metus ut quam aliquet commodo. Etiam non lacinia mi. Vestibulum vel tellus nec ipsum scelerisque lobortis sed non risus. Phasellus rhoncus est eget magna auctor, a consectetur urna pulvinar.
            </p>
            <p>
                Etiam ornare tortor vel nisi porta rutrum. In et laoreet mauris. Sed id euismod mi. Ut id augue eu lacus cursus commodo vitae a felis. Pellentesque in enim eget nisi elementum mollis. Aliquam lacinia fringilla justo, et lobortis purus congue ac. Fusce fringilla ultrices erat, at consectetur orci iaculis a. Morbi vitae orci scelerisque, condimentum nibh vel, porttitor libero. Nullam eleifend dui odio, eu vestibulum nulla eleifend eget. Ut vitae pulvinar tortor. Praesent vestibulum ante id est lacinia viverra. Nunc quis velit nec risus lobortis scelerisque. Etiam in fringilla orci. Sed convallis sem sagittis rutrum lobortis. Vivamus quis velit in leo scelerisque condimentum. Suspendisse in diam leo.
            </p>
            <br />
            <Animation />
        </SobreWrapper>
    )
}

