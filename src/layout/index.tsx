import { Header } from "@/components/header/header"
import { Outlet } from "react-router"

export const Layout = () => {
    // render the header and the outlet (the pages)
    return <div className="flex flex-col h-screen">
        <Header />
        <main className="flex-1 pb-6">
            <Outlet />
        </main>
    </div>
}
