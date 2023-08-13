import { FC } from 'react'
import Header from '../../layouts/header/Header';
import Banner from './components/banner/Banner';
import Filter from '../../layouts/filter/Filter';
import Offer from './components/offer/Offer';
import Consult from './components/consult/Consult';
import Footer from '../../layouts/footer/Footer';

const Home: FC = () => {
    return (
        <>
            <Header />
            <Banner />
            <Filter />
            <Offer />
            <Consult />
            <Footer />
        </>
    )
}

export default Home