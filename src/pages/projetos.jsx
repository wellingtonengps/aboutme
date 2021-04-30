import ProjetosWrapper from '../styles/projetos'
import SobreWrapper, { FigureWrapper } from '../styles/sobre';

export default function Projetos() {
    return (
        <SobreWrapper>
            <div>
                <h2>Projetos</h2>
                <FigureWrapper>
                    <div>
                        <img src="./logo_ufjf.png" alt="logo ufjf" height="100rem" />
                        <figcaption>Projeto 1</figcaption>
                    </div>
                    <div>
                        <img src="./logo_ufvjm.png" alt="logo ufjf" height="100rem" />
                        <figcaption>Projeto 2</figcaption>
                    </div>

                </FigureWrapper>
            </div>
        </SobreWrapper>
    )
}