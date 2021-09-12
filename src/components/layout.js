import React, { useContext } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import { GatsbyContext } from "../context/context"

const Layout = ({ children }) => {
  const { isSidebarOpen } = useContext(GatsbyContext)

  return (
    <React.Fragment>
      <Navbar />
      {isSidebarOpen && <Sidebar />}
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
