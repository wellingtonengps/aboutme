import styled from 'styled-components'

const CompetenciasWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    padding: 3rem 10rem;

    height: calc(100vh - 3rem);
    overflow: auto;

    div {
        align-items: center;    
        text-align: center;

        h1 {
            padding-bottom: 0.8rem;
        }

        h1+ul {
            padding-bottom: 1.5rem;
        }
    }

    ul {
        padding-top: 0.3rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        list-style-type: none;
    }

    li{
        padding-right: 1.5rem;
    }
`;

export default CompetenciasWrapper;