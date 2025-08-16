import styled  from "styled-components"
import Logout from "../features/authentication/Logout"
const HeaderSection= styled.header`
    background-color:var(--color-grey-0);
    padding:1.6rem 1.4rem;
`

export default function Header() {
  return (
    <>
      <HeaderSection><Logout/></HeaderSection>
    </>
  )
}
