import styled from "styled-components";
import { useDark } from "../context/DarkMoodContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const {isDark} = useDark();
  const src = isDark ? "/logo-light.png" : "/logo-dark.png"
  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
