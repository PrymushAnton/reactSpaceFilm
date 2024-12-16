import { Layout } from './Layout/Layout'
import { Header } from './Header/Header'
import { Main } from './Main/Main'
import { Footer } from './Footer/Footer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { MainList } from "./MainList/MainList"
import { CatalogList } from "./CatalogList/CatalogList"




export function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route path='/' element={<MainList></MainList>}></Route>
                    <Route path='/catalog' element={<CatalogList></CatalogList>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}