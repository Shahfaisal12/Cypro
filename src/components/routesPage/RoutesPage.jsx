import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Base from '../Layout/Base'
import Home from '../pages/Home'
import PageNotFound from '../pages/PageNotFound'
import DetailPage from '../pages/DetailPage'

const RoutesPage = () => {
    return (
        <>
            <BrowserRouter>
                <Base>
                    <Routes >
                        <Route index path='/' element={<Home />} />
                        <Route path='/detailpage' element={<DetailPage />} />
                        <Route path='/*' element={<PageNotFound />} />
                    </Routes>
                </Base>
            </BrowserRouter>
        </>
    )
}

export default RoutesPage