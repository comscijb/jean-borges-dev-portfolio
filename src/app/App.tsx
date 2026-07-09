import { Route, Routes } from "react-router"
import { HomePage } from "@/pages/HomePage"
import { LinksPage } from "@/pages/LinksPage"
import { ProjectPage } from "@/pages/ProjectPage"
import { NotFoundPage } from "@/pages/NotFoundPage"
import { ScrollToTop } from "@/components/common/ScrollToTop"

export default function App() {
  return (
    <>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="/projetos/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </>
  )
}
