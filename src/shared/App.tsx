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
import { AdminPage } from '../pages/AdminPage/AdminPage'
import { ModelPage } from '../pages/ModelPage/ModelPage'
import { ChangeRecordPage } from '../pages/ChangeRecordPage/ChangeRecordPage'
import { AddRecordPage } from '../pages/AddRecordPage/AddRecordPage'
import { DeleteRecordPage } from '../pages/DeleteRecordPage/DeleteRecordPage'



export function App(){
    return(
        <RecentlyViewedFilmsContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout></Layout>}>
                        <Route path='/' element={<MainList></MainList>}/>
                        <Route path='/catalog' element={<CatalogList></CatalogList>}/>
                        <Route path='/film/:id' element={<FilmPage></FilmPage>}/>
                        <Route path='/actor/:id' element={<ActorPage></ActorPage>}/>
                        <Route path='/admin/' element={<AdminPage></AdminPage>}/>
                        <Route path='/admin/:name' element={<ModelPage></ModelPage>}/>
                        <Route path='/admin/:name/update/:id' element={<ChangeRecordPage></ChangeRecordPage>}/>
                        <Route path='/admin/:name/create' element={<AddRecordPage></AddRecordPage>}/>
                        <Route path='/admin/:name/delete/:id' element={<DeleteRecordPage></DeleteRecordPage>}/>
                        

                    </Route>
                </Routes>
            </BrowserRouter>
        </RecentlyViewedFilmsContextProvider>
    )
}