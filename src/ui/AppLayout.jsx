import { Outlet } from "react-router-dom"
import styled from "styled-components"
import Header from "./Header"
import SideBar from "./SideBar"

const GridContainer = styled.div`
    display:grid;
    height:100vh;
    grid-template-rows:auto 1fr;
    grid-template-columns:26rem 1fr;
    padding:1.6rem 1.4rem;

`

const Main = styled.main`
    background-color:var(--color-grey-50);
    padding:1.6rem 1.4rem;
`
export default function AppLayout() {
  return (
    <GridContainer>
        <Header/>
        <SideBar/>
        <Main>
            <Outlet/>
        </Main>
    </GridContainer>
  )
}
