import { ReactNode } from "react"
import "./Layout.css"

import { Header } from "../Header/Header"
import { Main } from "../Main/Main"
import { Footer } from "../Footer/Footer"

import { Outlet } from "react-router-dom"

interface ILayoutProps {
    children?: ReactNode
}

export function Layout(props: ILayoutProps){
    return(
        <div className="Layout">
            {/* {props.children} */}
            <Header></Header>
            <div id="headerPass"></div>
            <Main>
                <Outlet />
            </Main>
            <Footer></Footer>
        </div>
    )
}