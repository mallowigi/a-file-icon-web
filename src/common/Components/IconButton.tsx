import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface ButtonProps {
  isChecked: boolean;
}

const Button = styled.button(({ isChecked }: ButtonProps) => css`
  display: flex;
  border: ${isChecked ? '2px solid var(--atom-accent)' : '2px solid transparent'};
  border-radius: 4px;
  background-color: var(--atom-button);
  color: var(--atom-foreground);
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease;
  width: 100%;
  height: 100%;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: var(--atom-hl);
  }
`);

interface Props {
  id: string;
  isChecked: boolean;
  setChecked: (isChecked: boolean) => void;
  text: string;
  icon?: string;
}

export const IconButton = ({ id, isChecked, setChecked, text, icon }: Props) => {
  const toggle = () => {
    setChecked(!isChecked);
  };

  return (
    <div>
      <Button onClick={toggle} isChecked={!!isChecked}>
        {icon && <img src={icon} alt={text} width={24} height={24}/>}
        {text}
      </Button>
    </div>
  );
};
