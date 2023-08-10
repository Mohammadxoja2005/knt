import { FC } from 'react'
import Header from '../../layouts/header/Header';
import Banner from './components/banner/Banner';
import Filter from '../../layouts/filter/Filter';

const Home: FC = () => {
    return (
        <>
            <Header />
            <Banner />
            <Filter />
        </>
    )
}

export default Home