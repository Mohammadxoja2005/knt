import { FC } from 'react'
// components
import Header from '../../layouts/header/Header'
import Filter from '../../layouts/filter/Filter'
import Market from './components/market/Market'

import Footer from '../../layouts/footer/Footer'

const Objects: FC = () => {
    return (
        <>
            <Header />
            <br />
            <br />
            <Filter />
            <Market />
            {/* <Footer /> */}
        </>
    )
}

export default Objects