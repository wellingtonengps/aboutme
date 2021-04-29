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
                    <li><SiReact size="3rem" /><br />React</li>
                    <li><SiFlutter size="3rem" /><br/> Flutter </li>
                    <li><SiKotlin size="3rem" /><br/> Kotlin </li>
                </ul>
            </div>
            <div>
                <h1>Design:</h1>
                <ul>
                    <li><SiAdobeillustrator size="3rem" /><br/> Adobe <br/> Ilustrator</li>
                    <li><SiAdobephotoshop size="3rem" /><br /> Adobe <br/> Photoshop</li>
                </ul>
            </div>
            <div>
                <h1>Linguagens:</h1>
                <ul>
                    <li><SiCsswizardry size="3rem" /><br /> CSS </li>
                    <li><SiJavascript size="3rem" /><br /> JavaScript </li>
                    <li><SiTypescript size="3rem" /><br/> TypeScript </li>
                    <li><SiCplusplus size="3rem" /><br/> C++ </li>
                    <li><SiJava size="3rem" /> <br/> Java </li>
                </ul>
            </div>
            <div>
                <h1>Sistemas:</h1>
                <ul>
                    <li><SiWindows size="3rem" /><br/> Windows </li>
                    <li><SiUbuntu size="3rem" /><br/> Ubuntu </li>
                </ul>
            </div>
            <div>
                <h1>Outros:</h1>
                <ul>
                    <li><SiMicrosoftword size="3rem" /><br/> Word </li>
                    <li><SiMicrosoftexcel size="3rem" /><br/> Excel </li>
                    <li><SiGithub size="3rem" /><br/> GitHub </li>
                    <li><SiVisualstudiocode size="3rem" /><br/> VS Code </li>
                    <li><SiNotion size="3rem" /><br/> Notion </li>
                </ul>
            </div>
        </CompetenciasWrapper>
    )
}