import { FC } from 'react'

import Header from '../../layouts/header/Header'
import Footer from '../../layouts/footer/Footer'
import Contact from './components/contact/Contact'
import Banner from './components/banner/Banner'
import Description from './components/description/Description'
import Trustteam from './components/trustteam/Trustteam'
import Benefit from './components/benefit/Benefit'
import Help from './components/help/Help'
import Partner from './components/partner/Partner'

const AboutUs: FC = () => {
    return (
        <>
            <Header />
            <Banner />
            <Description />
            <Trustteam />
            <Benefit />
            <Help />
            <Partner />
            <Contact />
            <Footer />
        </>
    )
}

export default AboutUs