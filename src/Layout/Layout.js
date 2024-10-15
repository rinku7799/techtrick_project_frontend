import React from 'react'
import Header from '../component/header/header'
import Footer from '../component/footer/footer'

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout
