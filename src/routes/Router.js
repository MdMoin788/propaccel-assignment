import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'

const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' exact element={< Dashboard />} />
            </Routes>
        </>
    )
}

export default Router
