import { Layout } from './Layout/Layout'
import { Header } from './Header/Header'
import { Main } from './Main/Main'
import { Footer } from './Footer/Footer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CatalogList } from "../pages/CatalogList/CatalogList"
import { MainList } from '../pages/MainList/MainList'
import { FilmPage } from '../pages/FilmPage/FilmPage'
import { ActorPage } from '../pages/ActorPage/ActorPage'

import { RecentlyViewedFilmsContextProvider } from '../context/recentlyViewedFilmsContext'



export function App(){
    return(
        <RecentlyViewedFilmsContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout></Layout>}>
                        <Route path='/' element={<MainList></MainList>}></Route>
                        <Route path='/catalog' element={<CatalogList></CatalogList>}></Route>
                        <Route path='/film/:id' element={<FilmPage></FilmPage>}></Route>
                        <Route path='/actor/:id' element={<ActorPage></ActorPage>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </RecentlyViewedFilmsContextProvider>
    )
}