import CompetenciasWrapper from '../styles/competencias'
import {
    SiAdobephotoshop, SiAdobeillustrator, SiUbuntu, SiNotion, SiKotlin, SiCsswizardry, SiJavascript, SiJava, SiMicrosoftword,
    SiMicrosoftexcel, SiReact, SiCplusplus, SiFlutter, SiGithub, SiWindows, SiVisualstudiocode, SiTypescript
} from "react-icons/si";

export default function Competencias() {
    return (
        <CompetenciasWrapper>
            <div>
                <h1>Frameworks:</h1>
                <ul>
                    <li><SiReact size="3rem" /></li>
                    <li><SiFlutter size="3rem" /></li>
                    <li><SiKotlin size="3rem" /></li>
                </ul>
            </div>
            <div>
                <h1>Design:</h1>
                <ul>
                    <li><SiAdobeillustrator size="3rem" /></li>
                    <li><SiAdobephotoshop size="3rem" /></li>
                </ul>
            </div>
            <div>
                <h1>Linguagens:</h1>
                <ul>
                    <li><SiCsswizardry size="3rem" /></li>
                    <li><SiJavascript size="3rem" /></li>
                    <li><SiTypescript size="3rem" /></li>
                    <li><SiCplusplus size="3rem" /></li>
                    <li><SiJava size="3rem" /></li>
                </ul>
            </div>
            <div>
                <h1>Sistemas:</h1>
                <ul>
                    <li><SiWindows size="3rem" /></li>
                    <li><SiUbuntu size="3rem" /></li>
                </ul>
            </div>
            <div>
                <h1>Outros:</h1>
                <ul>
                    <li><SiMicrosoftword size="3rem" /></li>
                    <li><SiMicrosoftexcel size="3rem" /></li>
                    <li><SiGithub size="3rem" /></li>
                    <li><SiVisualstudiocode size="3rem" /></li>
                    <li><SiNotion size="3rem" /></li>
                </ul>
            </div>
        </CompetenciasWrapper>
    )
}