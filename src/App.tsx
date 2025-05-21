import { Route, Routes } from "react-router"
import { routes } from "./routes"
import { Layout } from "@/layout"

function App() {
  // render routes
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  )
}

export default App
