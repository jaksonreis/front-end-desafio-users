import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useTheme } from 'styled-components';

import {
  Container,
  IconContainer,
  InputText,
} from './styles';

interface Props {
  onChange: (value: string) => void;
}

export function Search({
  onChange,
  ...rest
}: Props) {
  const [isFocused, setIsFocused] = useState(false);

  const theme = useTheme();

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  return (
    <Container
      isFocused={isFocused}>
      
      <InputText
        type="search"
        placeholder='Pesquisar . . .'
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        onChange={(e) => onChange(e.target.value.toUpperCase())}
        {...rest}
      />
        <IconContainer isFocused={isFocused}>
          <BiSearchAlt2
            size={20}
            color={theme.colors.text_light}
          />
        </IconContainer>
    </Container>
  );
}