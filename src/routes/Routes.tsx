import { BrowserRouter, Routes, Route} from 'react-router-dom'

import { Layout } from '../shared/Layout/Layout'

import { AdminPage } from '../pages/AdminPage/AdminPage'
import { ModelPage } from '../pages/ModelPage/ModelPage'
import { ChangeRecordPage } from '../pages/ChangeRecordPage/ChangeRecordPage'
import { AddRecordPage } from '../pages/AddRecordPage/AddRecordPage'
import { FilmPage } from '../pages/FilmPage/FilmPage'
import { ActorPage } from '../pages/ActorPage/ActorPage'
import { CatalogList } from "../pages/CatalogList/CatalogList"
import { MainList } from '../pages/MainList/MainList'
import { DeleteRecordPage } from '../pages/DeleteRecordPage/DeleteRecordPage'


export function AppRoutes(){
    return (
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
    )
}