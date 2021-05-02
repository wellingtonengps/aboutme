import ProjetosWrapper from '../styles/projetos'

export default function Projetos() {
    return (
        <ProjetosWrapper>
            <h2>Projetos</h2>
            <div className="grid">
                <figure>
                    <img src="./fig1.png" alt="logo ufjf" height="200rem" />
                    <figcaption>Projeto de iniciação científica: Effect of anadenanthera colubrina</figcaption>
                </figure>
                <figure>
                    <img src="./fig2.png" alt="logo ufjf" height="200rem" />
                    <figcaption>Artigo publicado: <a href="https://www.tandfonline.com/doi/full/10.1080/14786419.2019.1624962?  scroll=topneedAccess=true">Effect of anadenanthera colubrina</a></figcaption>
                </figure>
            </div>
        </ProjetosWrapper>
    )
}