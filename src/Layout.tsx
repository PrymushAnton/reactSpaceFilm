import { ReactNode } from "react"
import "./static/css/Layout.css"

interface ILayoutProps {
    children : ReactNode
}

export function Layout(props: ILayoutProps){
    return(
        <div className="Layout">
            {props.children}
        </div>
    )
}