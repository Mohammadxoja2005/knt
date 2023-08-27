import { FC } from 'react'

import Header from '../../layouts/header/Header'
import Footer from '../../layouts/footer/Footer'
import Form from '../../layouts/form/Form'
import Banner from './components/banner/Banner'
import Description from './components/description/Description'

const AboutUs: FC = () => {
    return (
        <>
            <Header />
            <Banner />
            <Description />
            <div style={{ maxWidth: "1000px", margin: "auto" }} >
                <Form />
            </div>
            <Footer />
        </>
    )
}

export default AboutUs