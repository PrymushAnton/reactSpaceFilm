import { UserContextProvider } from "../context/userContext"
import { RecentlyViewedFilmsContextProvider } from '../context/recentlyViewedFilmsContext'
import { AppRoutes } from "../routes/Routes"

export function App(){
    return(
        <UserContextProvider>
            <RecentlyViewedFilmsContextProvider>
                <AppRoutes/>
            </RecentlyViewedFilmsContextProvider>
        </UserContextProvider>
    )
}