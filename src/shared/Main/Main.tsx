import "./Main.css";
import { ReactNode } from "react";

interface ILayoutProps {
    children : ReactNode
}


export function Main(props: ILayoutProps) {
    return (
        <main>
            {props.children}

        </main>
    )
};

