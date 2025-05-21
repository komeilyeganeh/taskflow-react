import { Header } from "@/components/header/header"
import { Outlet } from "react-router"

export const Layout = () => {
    // render the header and the outlet (the pages)
    return <>
        <Header />
        <main>
            <Outlet />
        </main>
    </>
}
