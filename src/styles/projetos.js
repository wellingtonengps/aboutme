import styled from 'styled-components'

const ProjetosWrapper = styled.div`
      padding: 3rem 10rem;
    
    height: calc(100vh - 3rem);
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
    h2 {
        font-size: 2rem;
        display: flex;
        justify-content: center;
        padding-bottom: 2rem;
    }

    p {
        font-size: 1.2rem;
        line-height: 1.7rem;

        text-align: justify;
        text-indent: 1.5rem;
        padding-bottom: 0.5rem;
    }

    .grid {
        display: grid;
        gap: 10rem;
        grid-template-columns: 15rem 15rem;
        justify-content: center;
        align-content: center;
        margin-top: 3rem;

        figure {
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
                border-radius: 3%;
                margin-bottom: 1rem;
            }

            figcaption {
                text-align: center;
            }
        }
    }
`;

export default ProjetosWrapper;