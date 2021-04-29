import styled from 'styled-components'

const CompetenciasWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: calc(100vh - 3rem);
    overflow: auto;

    div {
        margin-bottom: 1.5rem;
        align-items: center;    
        text-align: center;
    }

    ul {
        margin-top: 0.3rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        list-style-type: none;
    }

    li{
        margin-right: 1.5rem;
    }
`;

export default CompetenciasWrapper;