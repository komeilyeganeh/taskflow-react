import { Route, Routes } from "react-router"
import { routes } from "./routes"

function App() {
  // render routes
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}

export default App
