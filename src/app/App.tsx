import { Route, Routes } from "react-router"
import { HomePage } from "@/pages/HomePage"
import { ProjectPage } from "@/pages/ProjectPage"
import { NotFoundPage } from "@/pages/NotFoundPage"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projetos/:slug" element={<ProjectPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}