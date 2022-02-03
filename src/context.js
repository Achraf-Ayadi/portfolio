import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [navFixed, setNavFixed] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const event = () => {
    if (window.scrollY > 80) {
      setNavFixed(true)
    } else {
      setNavFixed(false)
    }
  }
  window.addEventListener('scroll', event)

  const ToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  return (
    <AppContext.Provider
      value={{
        event,
        navFixed,
        ToggleSidebar,
        isSidebarOpen,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
