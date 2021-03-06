import styled from 'styled-components'

const FormacaoWrapper = styled.div`
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

    a {
        text-decoration: none;
    }

    .grid {
        display: flex;
        flex-direction: row;
        margin-top: 3rem;
        

        figure {
            margin-left: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
         }
    }

`;

export default FormacaoWrapper;