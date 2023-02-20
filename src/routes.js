import React, {useContext} from 'react'
import { Route, Routes } from 'react-router-dom'
import pageContext from './components/pageContext'
import Home from './components/Home'
import Contact from './components/Contact'

function Rout(props) {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path={`/contact`} element={<Contact />} />
        </Routes>
    )
}

export default Rout