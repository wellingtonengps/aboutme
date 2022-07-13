import styled from "styled-components";

export const Container = styled.div`
  background-color: #333;
  margin: 0 auto;
  padding: 2rem 2rem;
  max-width: 60rem;
`;

export const Main = styled.main`
  min-height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  margin: 0;
  line-height: 1.15;
  font-size: 2.5rem;
  text-align: left;
  font-family: "Luckiest Guy";
  max-width: 18rem;
  letter-spacing: 0.1rem;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 22rem;

  @media (max-width: 800px) {
    margin-top: 1rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  width: 14rem;
  height: 40px;
  margin-bottom: 48px;
  align-items: center;
  justify-content: space-between;
`;

export const SubTitle = styled.div`
  h2 {
    margin: 0;
    line-height: 1.15;
    letter-spacing: 0.15rem;
    text-align: left;
    font-family: "Luckiest Guy";
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Card = styled.a`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;

  :hover,
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
  }

  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;

export const Logo = styled.span`
  height: 1em;
  margin-left: 0.5rem;
`;
