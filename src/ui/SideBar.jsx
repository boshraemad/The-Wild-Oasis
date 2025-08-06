import styled from "styled-components"
import Logo from "./Logo"
import MainNav from "./MainNav"
const SideBarSection=styled.aside`
    background-color:var(--color-grey-0);
    border-right-color:var(--color-grey-50);
    grid-row:1/-1;
    padding:1.6rem 1.4rem;
    display:flex;
    flex-direction:column;
    gap:3.2rem;
`;

export default function SideBar() {
  return (
    <SideBarSection>
        <Logo/>
        <MainNav/>
    </SideBarSection>
  )
}
