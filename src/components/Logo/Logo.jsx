import { LogoContainer, LogoImg } from './StyledLogo'

const Logo = ({ image }) => (
  <div>
    <LogoContainer>
      <LogoImg src={image} alt="logo" />
    </LogoContainer>
  </div>
)

export default Logo