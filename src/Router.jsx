import { Route, Routes } from "react-router-dom"

import { HomePage } from "./pages/HomePage"
import { DetailsPage } from "./pages/DetailsPage"


export const Router = () => {
  return (
    <Routes>
        <Route path="/*" element={<HomePage/>}/>
        <Route path="items/:id" element={<DetailsPage/>}/>
    </Routes>
  )
}
