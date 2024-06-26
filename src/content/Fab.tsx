import styled from '@emotion/styled';
import Logo from 'url:../assets/logo.svg';

const FabStyles = styled.button`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(--atom-accent);
  color: white;
  border: none;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    background-color: var(--atom-accentT);
    opacity: 0.8;
  }
`;

export const Fab = ({ onClick }) => (
  <FabStyles title="Atom Material Icons Settings"
             onClick={onClick} id="atom-fab">
    <img src={Logo} alt="Logo"/>
  </FabStyles>
);
