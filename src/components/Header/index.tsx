import IconLogoSVG from '../../assets/logoIcon.svg'

import {
  Container,
  LogoContainer,
  BackgroundLogo,
  TextLogo,
  ImgLogo

} from './styles';

export function Header() {
  return (
    <Container>
      <LogoContainer>
        <BackgroundLogo>
          <ImgLogo src={IconLogoSVG} />
        </BackgroundLogo>
        <TextLogo>Admin Users</TextLogo>

      </LogoContainer>

    </Container>
  );
}