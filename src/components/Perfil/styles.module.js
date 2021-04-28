import styled from 'styled-components'

export const PerfilWrapperStyles = styled.div`
    height: 100vh;
    width: 26.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
    
    
    img {
        height: 15rem;
        width: 15rem;
        border-radius: 50%;
    }   

    h1, h2 {
        text-align: center;
    }
`;

export const SocialWrapperStyles = styled.div`
    height: 3rem;
    width: 19rem;
    background-color: rgba(68,71,90,0.07) ;
    border-radius: 1.6rem;

    ul { 
        display: flex;
        list-style-type: none;
        justify-content: space-around;
        margin-top: 0.7rem;
    }


    li a {
        color: ${props => props.theme.colors.text[1]};
        text-decoration: none;
        
    }
`;
