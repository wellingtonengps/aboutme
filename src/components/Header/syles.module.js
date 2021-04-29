import styled from 'styled-components'

const HeaderWrapperStyle = styled.header`
  height: 3rem;
  background-color: ${props => props.theme.colors.primary[0]};
  display: flex;
  justify-content: center;

ul {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  overflow: hidden;

}


li a {
  font-family: 'Quicksand', sans-serif;
  font-weight: 200;
  color: white;
  text-align: center;
  padding: 3rem 16px;
  text-decoration: none;
  text-transform: uppercase;
}


li a:hover {
  background-color: ${props => props.theme.colors.orange};
}
`;

export default HeaderWrapperStyle;
